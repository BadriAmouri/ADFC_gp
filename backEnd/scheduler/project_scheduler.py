import numpy as np
from ortools.sat.python import cp_model
import time
import pandas as pd
import matplotlib.pyplot as plt
import io
import base64

class ProjectScheduler:
    def __init__(self):
        self.model = None
        self.solver = None
        self.solution = None
        self.assignments = []
        self.execution_time = 0

    def solve_csp(self, projects, employees, weeks, shift_system="3x3", time_limit_seconds=120):
        start_time = time.time()
        shift_length = 3 if shift_system == "3x3" else 4
        self.model = cp_model.CpModel()

        # Create variables
        x = {}
        for e in range(len(employees)):
            x[e] = {}
            for p in range(len(projects)):
                x[e][p] = {}
                for t in [0, 1]:
                    x[e][p][t] = self.model.NewBoolVar(f"x_{e}_{p}_{t}")

        y_project = {}
        y_active = {}
        for e in range(len(employees)):
            y_project[e] = {}
            y_active[e] = {}
            for w in range(weeks):
                y_project[e][w] = self.model.NewIntVar(-1, len(projects) - 1, f"y_proj_{e}_{w}")
                y_active[e][w] = self.model.NewBoolVar(f"y_active_{e}_{w}")

        slack = {}
        for p, project in enumerate(projects):
            slack[p] = {}
            for role in project["roles"]:
                for t in [0, 1]:
                    team_req = project["roles"][role] // 2
                    if t == 0 and project["roles"][role] % 2 == 1:
                        team_req += 1
                    slack[p][f"{role}_{t}"] = self.model.NewIntVar(0, team_req, f"slack_{p}_{role}_{t}")

        team_counts = {t: self.model.NewIntVar(0, len(employees), f"team_count_{t}") for t in [0, 1]}
        team_diff = self.model.NewIntVar(0, len(employees), "team_balance_diff")

        # Constraint 1: employee can be assigned to at most one project/team
        for e in range(len(employees)):
            self.model.Add(sum(x[e][p][t] for p in range(len(projects)) for t in [0, 1]) <= 1)

        # Constraint 2: active weeks
        for e in range(len(employees)):
            for w in range(weeks):
                literals = []
                for p, project in enumerate(projects):
                    if not (project["start"] <= w <= project["end"]):
                        continue
                    rel_week = w - project["start"]
                    cycle = rel_week // shift_length
                    team = 0 if cycle % 2 == 0 else 1
                    literals.append(x[e][p][team])
                if literals:
                    self.model.AddBoolOr(literals).OnlyEnforceIf(y_active[e][w])
                    self.model.AddBoolAnd([l.Not() for l in literals]).OnlyEnforceIf(y_active[e][w].Not())
                else:
                    self.model.Add(y_active[e][w] == 0)

        # Constraint 3: y_project
        for e in range(len(employees)):
            for w in range(weeks):
                literals = []
                for p, project in enumerate(projects):
                    if not (project["start"] <= w <= project["end"]):
                        continue
                    rel_week = w - project["start"]
                    cycle = rel_week // shift_length
                    t = 0 if cycle % 2 == 0 else 1
                    cond = x[e][p][t]
                    self.model.Add(y_project[e][w] == p).OnlyEnforceIf(cond)
                    literals.append(cond)
                if literals:
                    self.model.Add(y_project[e][w] == -1).OnlyEnforceIf([l.Not() for l in literals])
                else:
                    self.model.Add(y_project[e][w] == -1)

        # Constraint 4: availability
        for e, emp in enumerate(employees):
            for p, proj in enumerate(projects):
                for t in [0, 1]:
                    unavailable = []
                    for w in range(proj["start"], proj["end"] + 1):
                        rel = w - proj["start"]
                        is_a_week = (rel // shift_length) % 2 == 0
                        if (t == 0 and is_a_week or t == 1 and not is_a_week) and emp["availability"][w] == 0:
                            unavailable.append(w)
                    if unavailable:
                        self.model.Add(x[e][p][t] == 0)

        # Constraint 5: roles
        for e, emp in enumerate(employees):
            for p, proj in enumerate(projects):
                if emp["role"] not in proj["roles"]:
                    for t in [0, 1]:
                        self.model.Add(x[e][p][t] == 0)

        # Constraint 6: role requirements
        for p, proj in enumerate(projects):
            for role, count in proj["roles"].items():
                a_req = (count + 1) // 2
                b_req = count // 2
                matching = [e for e, emp in enumerate(employees) if emp["role"] == role]
                self.model.Add(sum(x[e][p][0] for e in matching) + slack[p][f"{role}_0"] == a_req)
                self.model.Add(sum(x[e][p][1] for e in matching) + slack[p][f"{role}_1"] == b_req)

        # Constraint 7: team balance
        self.model.Add(team_counts[0] == sum(x[e][p][0] for e in range(len(employees)) for p in range(len(projects))))
        self.model.Add(team_counts[1] == sum(x[e][p][1] for e in range(len(employees)) for p in range(len(projects))))
        self.model.Add(team_counts[0] - team_counts[1] <= team_diff)
        self.model.Add(team_counts[1] - team_counts[0] <= team_diff)
        self.model.Add(team_diff <= 2)

        # Objective
        expertise_terms = []
        slack_penalty = []
        for e, emp in enumerate(employees):
            for p, proj in enumerate(projects):
                duration = proj["end"] - proj["start"] + 1
                active = (duration + shift_length) // (2 * shift_length)
                for t in [0, 1]:
                    expertise_terms.append(emp["expertise"] * active * x[e][p][t])
        for p, proj in enumerate(projects):
            for role in proj["roles"]:
                for t in [0, 1]:
                    slack_penalty.append(1000 * slack[p][f"{role}_{t}"])
        balance_penalty = 2000 * team_diff

        self.model.Maximize(sum(expertise_terms) - sum(slack_penalty) - balance_penalty)

        # Solve
        self.solver = cp_model.CpSolver()
        self.solver.parameters.max_time_in_seconds = time_limit_seconds
        status = self.solver.Solve(self.model)

        # Extract solution
        self.assignments = []
        if status in [cp_model.OPTIMAL, cp_model.FEASIBLE]:
            for e, emp in enumerate(employees):
                for p, proj in enumerate(projects):
                    for t in [0, 1]:
                        if self.solver.Value(x[e][p][t]) == 1:
                            team_name = "A" if t == 0 else "B"
                            for w in range(proj["start"], proj["end"] + 1):
                                rel = w - proj["start"]
                                active = (rel // shift_length) % 2 == 0
                                if (t == 0 and active) or (t == 1 and not active):
                                    self.assignments.append({
                                        "employee": emp["name"],
                                        "project": proj["name"],
                                        "week": w,
                                        "role": emp["role"],
                                        "expertise": emp["expertise"],
                                        "team": team_name
                                    })

        self.execution_time = time.time() - start_time
        sol_status = "OPTIMAL" if status == cp_model.OPTIMAL else "FEASIBLE" if status == cp_model.FEASIBLE else "INFEASIBLE"
        return sol_status, self.assignments, self.execution_time

    def visualize_schedule(self, assignments, employees, projects, weeks):
        if not assignments:
            print("No assignments to visualize.")
            return None
        df = pd.DataFrame(assignments)
        fig, ax = plt.subplots(figsize=(15, 10))
        unique_employees = sorted(df['employee'].unique())
        ax.set_yticks(range(len(unique_employees)))
        ax.set_yticklabels(unique_employees)
        ax.set_xlim(0, weeks)
        ax.grid(True)
        for emp in unique_employees:
            emp_data = df[df['employee'] == emp]
            idx = unique_employees.index(emp)
            for (proj, team), group in emp_data.groupby(['project', 'team']):
                weeks_sorted = sorted(group['week'])
                blocks = []
                if weeks_sorted:
                    start = weeks_sorted[0]
                    prev = start
                    for w in weeks_sorted[1:]:
                        if w != prev + 1:
                            blocks.append((start, prev))
                            start = w
                        prev = w
                    blocks.append((start, prev))
                color = self._get_project_color(proj)
                pattern = "//" if team == "B" else "\\\\"
                for s, e in blocks:
                    ax.barh(idx, e - s + 1, left=s, color=color, edgecolor="black", hatch=pattern)
                    if blocks[0] == (s, e):
                        ax.text(s + (e - s + 1)/2, idx, f"{proj} (Team {team})", ha="center", va="center", fontsize=8)
        return fig

    def _get_project_color(self, project_name):
        colors = plt.cm.tab10.colors
        return colors[hash(project_name) % len(colors)]

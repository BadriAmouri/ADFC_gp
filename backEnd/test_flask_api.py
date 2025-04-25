import requests
import random
import numpy as np

url = "http://127.0.0.1:5000/solve"

def generate_test_data(num_projects=5, num_employees=50, num_roles=4, weeks=52, shift_system="3x3", seed=42):
    random.seed(seed)
    np.random.seed(seed)

    shift_length = 3 if shift_system == "3x3" else 4
    roles = [f"Role_{i+1}" for i in range(num_roles)]

    # --- Generate Projects ---
    projects = []
    for p in range(num_projects):
        start_week = random.randint(0, weeks - shift_length * 4)
        min_duration = shift_length * 2
        max_possible_duration = weeks - start_week
        duration = random.randint(min_duration, max(min_duration, max_possible_duration))
        end_week = start_week + duration - 1
        role_needs = {}
        for role in roles:
            if random.random() > 0.3:
                role_needs[role] = random.randint(2, 4) * 2
        projects.append({
            "name": f"Project_{p+1}",
            "start": start_week,
            "end": end_week,
            "roles": role_needs
        })

    # --- Generate Employees ---
    employees = []
    role_counts = {r: 0 for r in roles}
    for e in range(num_employees):
        if e < num_roles * 2:
            role = roles[e % num_roles]
        else:
            weights = [1.0 / (role_counts[r] + 1) for r in roles]
            role = random.choices(roles, weights=weights)[0]
        role_counts[role] += 1

        availability = [1] * weeks
        vacation_weeks = random.sample(range(weeks), max(1, weeks // 10))
        for v in vacation_weeks:
            availability[v] = 0

        employees.append({
            "name": f"Employee_{e+1}",
            "role": role,
            "expertise": random.randint(50, 100),
            "availability": availability,
            "team": random.choice(["A", "B"])
        })

    return {
        "projects": projects,
        "employees": employees,
        "weeks": weeks,
        "shift_system": shift_system
    }

# --- Generate realistic test data like in 123.py ---
payload = generate_test_data()

# --- Call Flask API ---
response = requests.post(url, json=payload)

# --- Display result ---
if response.status_code == 200:
    result = response.json()
    print("Schedule Solved")
    print("Status:", result["status"])
    print("Execution Time:", round(result["execution_time"], 2), "s")
    print("Sample Assignments (first 10):")
    for a in result["assignments"][:10]:
        print(a)
else:
    print(" Error:", response.status_code)
    print(response.text)

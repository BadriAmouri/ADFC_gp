from flask import Flask, request, jsonify
from scheduler.project_scheduler import ProjectScheduler

app = Flask(__name__)
scheduler = ProjectScheduler()

@app.route('/solve', methods=['POST'])
def solve_schedule():
    data = request.get_json()

    projects = data.get('projects')
    employees = data.get('employees')
    weeks = data.get('weeks')
    shift_system = data.get('shift_system', '3x3')

    if not projects or not employees or weeks is None:
        return jsonify({'error': 'Missing required fields: projects, employees, weeks'}), 400

    status, assignments, exec_time = scheduler.solve_csp(projects, employees, weeks, shift_system)

    return jsonify({
        'status': status,
        'execution_time': exec_time,
        'assignments': assignments
    })

if __name__ == '__main__':
    app.run(debug=True)

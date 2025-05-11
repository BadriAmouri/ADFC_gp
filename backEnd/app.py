from flask import Flask, request, jsonify
from scheduler.project_scheduler import ProjectScheduler
import os

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

    # Generate the visualization as an image
    fig = scheduler.visualize_schedule(assignments, employees, projects, weeks)

    if fig:
        # Define the file path where the image will be saved
        output_path = os.path.join('static', 'schedule_image.png')
        
        # Save the image to the directory
        fig.savefig(output_path, format='png')

        return jsonify({
            'status': status,
            'execution_time': exec_time,
            'assignments': assignments,
            'image_url': f'/static/schedule_image.png'  # Returning the URL of the saved image
        })
    else:
        return jsonify({
            'status': status,
            'execution_time': exec_time,
            'assignments': assignments,
            'image_url': None  # No image generated
        })

if __name__ == '__main__':
    # Ensure the static directory exists
    if not os.path.exists('static'):
        os.makedirs('static')
    
    app.run(debug=True)

from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd

from scheduler.project_scheduler import ProjectScheduler
import warnings
warnings.filterwarnings("ignore", category=UserWarning)

app = Flask(__name__)
CORS(app)

# Initialize components
scheduler = ProjectScheduler()
model = joblib.load("predictionModel.pkl")

# Define the order of features (same as X.columns in training)
feature_order = [
    "project_type", "rig_number", "start_year", "start_month", "end_year", "end_month",
    "duration_years", "depth", "geological_complexity", "volume_estimate",
    "risk_level", "has_automation", "project_budget", "water_treatment",
    "shift_type", "project_duration"
]

# Target columns for formatting
target_cols = [
    'drilling_engineer', 'operations_engineer', 'mud_engineer',
    'rig_manager', 'mechanical_engineer', 'geologist',
    'automation_specialist', 'water_engineer'
]

@app.route("/predict", methods=["POST"])
def predict():
    try:
        input_data = request.get_json()
        df = pd.DataFrame([input_data])[feature_order]

        prediction = model.predict(df)
        predicted_df = pd.DataFrame(prediction, columns=target_cols)
        predicted_df['total_employees'] = predicted_df.sum(axis=1)

        result = predicted_df.round(0).astype(int).to_dict(orient="records")[0]
        return jsonify(result)
    except Exception as e:
        return jsonify({"error": str(e)}), 400

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

    # Call the visualizer function and pass the assignments
    scheduler.visualize_schedule(assignments)

    return jsonify({
        'status': status,
        'execution_time': exec_time,
        'assignments': assignments
    })

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5001, debug=True)

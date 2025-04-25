from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd

app = Flask(__name__)
CORS(app)  # So the frontend can access the backend

# Load the trained model
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

if __name__ == "__main__":
    app.run(debug=True)
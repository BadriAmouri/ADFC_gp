'use client';

import { useState , useEffect } from 'react';
import { Listbox } from '@headlessui/react';
import { motion } from 'framer-motion';
import { ChevronUpDownIcon } from '@heroicons/react/24/solid';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const projectTypes = ["Exploration", "Development", "Production"];
const shiftTypes = ["4x4", "3x6"];
const riskLevels = ["Low", "Medium", "High"];
const yesNo = ["Yes", "No"];
const geologicalComplexities = ["Low", "Medium", "High"];




const generateEmployees = (predictionData) => {
  const roles = Object.keys(predictionData).filter(role => role !== 'total_employees');
  const employees = [];

  roles.forEach(role => {
    const count = predictionData[role];
    for (let i = 0; i < count; i++) {
      employees.push({
        name: `${role}_Employee_${i+1}`,
        role: role,
        expertise: Math.floor(Math.random() * 5) + 1,
        availability: Array(20).fill(1)   // Make availability match weeks
      });
    }
  });

  return employees; // 🔥 ADD THIS
};



export default function ProjectForm() {
  const [formData, setFormData] = useState({
    project_type: "",
    rig_number: "",
    start_year: "",
    start_month: "",
    end_year: "",
    end_month: "",
    duration_years: "", // update it to be  end_year - start_year
    depth: "",
    geological_complexity: "Medium",
    volume_estimate: "",
    risk_level: "",
    has_automation: "",
    project_budget: "",
    water_treatment: "",
    shift_type: "",
    project_duration: ""  // update it to be ( end year - start year )*12+(end month-start month)
  });

  const [isLoading, setIsLoading] = useState(false);
  const [prediction, setPrediction] = useState(null);
  const [scheduleResult, setScheduleResult] = useState(null);
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);


  const runScheduler = async (predictionData) => {
    try {
      const response = await axios.post('http://127.0.0.1:5001/solve', predictionData);
      setScheduleResult(response.data);
      console.log('Scheduler Result:', response.data);
    } catch (error) {
      console.error('Scheduler Error:', error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleListboxChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
  
    try {
      if (projects.length === 0) {
        console.warn("No projects to schedule.");
        return;
      }
  
      const schedulerInput = {
        projects,
        employees: generateEmployees(prediction), // use last prediction or get from form
        weeks: Number((formData.end_month - formData.start_month) * 4),
        shift_system: formData.shift_type,
      };
  
      console.log("🧠 Scheduler Input:", schedulerInput);
  
      await runScheduler(schedulerInput);
    } catch (error) {
      console.error("Scheduler Error:", error);
    } finally {
      setIsLoading(false);
    }
  };
  


  const Add_Project = async () => {
    setIsLoading(true);
  
    try {
      const payload = {
        ...formData,
        has_automation: formData.has_automation.toLowerCase() === "yes",
        water_treatment: formData.water_treatment.toLowerCase() === "yes",
        risk_level: parseFloat(formData.risk_level),
        depth: parseFloat(formData.depth),
        volume_estimate: parseFloat(formData.volume_estimate),
        project_budget: parseFloat(formData.project_budget),
        duration_years: parseInt(formData.end_year) - parseInt(formData.start_year),
        project_duration:
          (parseInt(formData.end_year) - parseInt(formData.start_year)) * 12 +
          (parseInt(formData.end_month) - parseInt(formData.start_month)),
        start_year: parseInt(formData.start_year),
        start_month: parseInt(formData.start_month),
        end_year: parseInt(formData.end_year),
        end_month: parseInt(formData.end_month),
      };
  
      const response = await axios.post("http://127.0.0.1:5001/predict", payload);
      const predictionData = response.data;
      setPrediction(predictionData);
  
      const newProject = {
        name: `Project ${String.fromCharCode(65 + projects.length)}`, // A, B, C...
        start: 0,
        end: Number(formData.end_month * 4 - 1),
        roles: {
          "Automation Specialist": predictionData.automation_specialist,
          "Drilling Engineer": predictionData.drilling_engineer,
          "Geologist": predictionData.geologist,
          "Mechanical Engineer": predictionData.mechanical_engineer,
          "Mud Engineer": predictionData.mud_engineer,
          "Operations Engineer": predictionData.operations_engineer,
          "Rig Manager": predictionData.rig_manager,
          "Water Engineer": predictionData.water_engineer,
        },
      };
  
      setProjects(prev => [...prev, newProject]);
  
      console.log("✅ Project added:", newProject);
    } catch (error) {
      console.error("Prediction Error:", error);
    } finally {
      setIsLoading(false);
    }
  };
  
  


  return (
    <div className="max-w-6xl mx-auto p-8 mt-10 bg-white rounded-2xl shadow-lg">
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="text-left mb-8">
        <h1 className="text-4xl font-bold text-orange-600 mb-2">Project Details {formData.project_duration}</h1>
        <p className="text-gray-500 text-lg">Provide necessary information to generate a staffing prediction</p>
      </motion.div>

      <motion.form onSubmit={handleSubmit} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.7 }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Dropdown label="Project Type" options={projectTypes} value={formData.project_type} onChange={(v) => handleListboxChange("project_type", v)} />
          <InputField label="Rig Number" name="rig_number" value={formData.rig_number} onChange={handleInputChange} type="text" />
          <InputField label="Start Year" name="start_year" value={formData.start_year} onChange={handleInputChange} type="number" />
          <InputField label="Start Month" name="start_month" value={formData.start_month} onChange={handleInputChange} type="number" />
          <InputField label="End Year" name="end_year" value={formData.end_year} onChange={handleInputChange} type="number" />
          <InputField label="End Month" name="end_month" value={formData.end_month} onChange={handleInputChange} type="number" />
          <InputField label="Depth" name="depth" value={formData.depth} onChange={handleInputChange} type="number" />
          <InputField label="Volume Estimate" name="volume_estimate" value={formData.volume_estimate} onChange={handleInputChange} type="number" />
          <InputField label="Risk Level (0 to 1)" name="risk_level" value={formData.risk_level} onChange={handleInputChange} type="number" />
          <Dropdown label="Has Automation?" options={yesNo} value={formData.has_automation} onChange={(v) => handleListboxChange("has_automation", v)} />
          <Dropdown label="Geological Complexity" options={geologicalComplexities} value={formData.geological_complexity} onChange={(v) => handleListboxChange("geological_complexity", v)} />
          <InputField label="Project Budget" name="project_budget" value={formData.project_budget} onChange={handleInputChange} type="number" />
          <Dropdown label="Water Treatment" options={yesNo} value={formData.water_treatment} onChange={(v) => handleListboxChange("water_treatment", v)} />
          <Dropdown label="Shift Type" options={shiftTypes} value={formData.shift_type} onChange={(v) => handleListboxChange("shift_type", v)} />
        </div>

        <div className="fixed bottom-8 right-8 z-50">
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    disabled={isLoading}
    onClick={Add_Project}
    className={`bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-full shadow-lg transition-all duration-300 text-lg ${
      isLoading ? 'opacity-50 cursor-not-allowed' : ''
    }`}
  >
    {isLoading ? 'Processing...' : '➕ Add Project'}
  </motion.button>
</div>

        <div className="text-center mt-12">
          <motion.button type="submit" whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }} disabled={isLoading} className={`bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold py-4 px-10 rounded-full shadow-md hover:shadow-lg transition text-xl ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}>
            {isLoading ? 'Processing...' : '✨ Generate Prediction'}
          </motion.button>
        </div>

        {!isLoading && prediction && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mt-8 p-6 bg-orange-50 rounded-lg shadow-inner">
            <h2 className="text-2xl font-semibold text-orange-700 mb-4">📊 Prediction Results</h2>
            <ul className="space-y-2 text-gray-800 text-lg">
              <li><strong>Automation Specialist:</strong> {prediction.automation_specialist}</li>
              <li><strong>Drilling Engineer:</strong> {prediction.drilling_engineer}</li>
              <li><strong>Geologist:</strong> {prediction.geologist}</li>
              <li><strong>Mechanical Engineer:</strong> {prediction.mechanical_engineer}</li>
              <li><strong>Mud Engineer:</strong> {prediction.mud_engineer}</li>
              <li><strong>Operations Engineer:</strong> {prediction.operations_engineer}</li>
              <li><strong>Rig Manager:</strong> {prediction.rig_manager}</li>
              <li><strong>Water Engineer:</strong> {prediction.water_engineer}</li>
            </ul>

            <hr className="my-4 border-orange-300" />

            <p className="text-xl font-bold text-gray-900">
              👥 <strong>Total Employees:</strong> {prediction.total_employees}
            </p>
          </motion.div>
        )}

{!isLoading && prediction && scheduleResult && Array.isArray(scheduleResult.assignments) && (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mt-8 p-6 bg-blue-50 rounded-lg shadow-inner">
    <h2 className="text-2xl font-semibold text-blue-700 mb-4">🗓️ Scheduling Results</h2>
    <ul className="space-y-2 text-gray-800 text-lg">
      {scheduleResult.assignments.slice(0, 20).map((assignment, index) => (
        <li key={index} className="flex justify-between">
          <span><strong>Employee:</strong> {assignment.employee}</span>
          <span><strong>Role:</strong> {assignment.role}</span>
          <span><strong>Project:</strong> {assignment.project}</span>
          <span><strong>Team:</strong> {assignment.team}</span>
          <span><strong>Week:</strong> {assignment.week}</span>
          <span><strong>Expertise:</strong> {assignment.expertise}</span>
        </li>
      ))}
    </ul>

    <hr className="my-4 border-blue-300" />

    <p className="text-lg font-bold text-gray-900">
      ⏳ <strong>Execution Time:</strong> {scheduleResult.execution_time} seconds
    </p>
    <p className="text-lg font-bold text-gray-900">
      ✅ <strong>Status:</strong> {scheduleResult.status}
    </p>
  </motion.div>
)}

      </motion.form>
    </div>
  );
}

function Dropdown({ label, options, value, onChange }) {
  return (
    <div>
      <Listbox value={value} onChange={onChange}>
        <div className="relative">
          <Listbox.Label className="block mb-2 text-sm font-medium text-gray-700">{label}</Listbox.Label>
          <Listbox.Button className="relative w-full py-2 pl-4 pr-10 text-left bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500">
            {value || 'Select an option'}
            <ChevronUpDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </Listbox.Button>
          <Listbox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto bg-white border border-gray-300 rounded-md shadow-lg max-h-60 focus:outline-none">
            {options.map((option, idx) => (
              <Listbox.Option key={idx} value={option}>
                {({ active, selected }) => (
                  <span className={`block px-4 py-2 text-lg ${selected ? 'bg-orange-100 text-orange-900' : active ? 'bg-orange-50' : 'text-gray-900'}`}>
                    {option}
                  </span>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
}

function InputField({ label, value, onChange, type, name }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
      />
    </div>
  );
}

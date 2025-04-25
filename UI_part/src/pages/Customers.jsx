'use client';

import { useState } from 'react';
import { Listbox } from '@headlessui/react';
import { motion } from 'framer-motion';
import { ChevronUpDownIcon } from '@heroicons/react/24/solid';

const projectTypes = ["exploration", "development", "production"];
const shiftTypes = ["4x4", "4x6"];
const riskLevels = ["low", "medium", "high"];
const yesNo = ["yes", "no"];
const specialitiesOptions = ["drilling", "completion", "production", "computer science", "civil", "electrical", "mechanical", "other"];

export default function ProjectForm() {
  const [formData, setFormData] = useState({
    projectType: "",
    shiftType: "",
    startDate: "",
    endDate: "",
    budget: "",
    geoComplexity: "",
    riskLevel: "",
    hasAutomation: "",
    waterTreatment: "",
    specialities: [],
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleListboxChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSpecialitiesChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      specialities: prev.specialities.includes(value)
        ? prev.specialities.filter(v => v !== value)
        : [...prev.specialities, value],
    }));
  };

  return (
    <div className="max-w-6xl mx-auto p-8 mt-10 bg-white rounded-2xl shadow-lg">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-left mb-8"
      >
        <h1 className="text-4xl font-bold text-orange-600 mb-2">
          Project Details
        </h1>
        <p className="text-gray-500 text-lg">
          Provide necessary information to generate a staffing prediction
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Project Type */}
          <Dropdown
            label="Project Type"
            options={projectTypes}
            value={formData.projectType}
            onChange={(value) => handleListboxChange("projectType", value)}
          />

          {/* Shift Type */}
          <Dropdown
            label="Shift Type"
            options={shiftTypes}
            value={formData.shiftType}
            onChange={(value) => handleListboxChange("shiftType", value)}
          />

          {/* Budget */}
          <InputField
            label="Budget ($)"
            name="budget"
            type="number"
            value={formData.budget}
            onChange={handleInputChange}
          />

          {/* Project Timeline (Start & End Dates) */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              label="Start Date"
              name="startDate"
              type="date"
              value={formData.startDate}
              onChange={handleInputChange}
            />
            <InputField
              label="End Date"
              name="endDate"
              type="date"
              value={formData.endDate}
              onChange={handleInputChange}
            />
          </div>

          {/* Geo Complexity */}
          <InputField
            label="Geological Complexity"
            name="geoComplexity"
            type="text"
            value={formData.geoComplexity}
            onChange={handleInputChange}
          />

          {/* Risk Level */}
          <Dropdown
            label="Risk Level"
            options={riskLevels}
            value={formData.riskLevel}
            onChange={(value) => handleListboxChange("riskLevel", value)}
          />

          {/* Has Automation */}
          <Dropdown
            label="Automation Available?"
            options={yesNo}
            value={formData.hasAutomation}
            onChange={(value) => handleListboxChange("hasAutomation", value)}
          />

          {/* Water Treatment */}
          <Dropdown
            label="Water Treatment"
            options={yesNo}
            value={formData.waterTreatment}
            onChange={(value) => handleListboxChange("waterTreatment", value)}
          />

          {/* Specialities */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Specialities
            </label>
            <div className="flex flex-wrap gap-2">
              {specialitiesOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => handleSpecialitiesChange(option)}
                  className={`px-4 py-2 rounded-full border ${
                    formData.specialities.includes(option)
                      ? "bg-orange-600 text-white border-orange-500"
                      : "border-gray-300 text-gray-600 hover:bg-orange-100"
                  } transition-all duration-200 text-sm`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Submit Button */}
        <div className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold py-4 px-10 rounded-full shadow-md hover:shadow-lg transition text-xl"
          >
            ✨ Generate Prediction
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

function Dropdown({ label, options, value, onChange }: { label: string, options: string[], value: string, onChange: (value: string) => void }) {
  return (
    <div>
      <Listbox value={value} onChange={onChange}>
        <div className="relative">
          <Listbox.Label className="block mb-2 text-sm font-medium text-gray-700">
            {label}
          </Listbox.Label>
          <Listbox.Button className="w-full py-3 px-4 border border-gray-300 rounded-lg bg-white shadow-sm text-left focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 relative">
            <span>{value || `Select ${label}`}</span>
            <ChevronUpDownIcon className="w-5 h-5 absolute right-3 top-3 text-orange-500" />
          </Listbox.Button>
          <Listbox.Options className="absolute z-10 mt-2 w-full bg-white shadow-md rounded-lg max-h-60 overflow-auto focus:outline-none">
            {options.map((opt) => (
              <Listbox.Option
                key={opt}
                value={opt}
                className={({ active }) =>
                  `cursor-pointer select-none relative py-3 pl-4 pr-10 ${
                    active ? 'bg-orange-100 text-orange-600' : 'text-gray-900'
                  }`
                }
              >
                {opt}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
}

function InputField({ label, name, type, value, onChange }: { label: string, name: string, type: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full py-3 px-4 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
      />
    </div>
  );
}

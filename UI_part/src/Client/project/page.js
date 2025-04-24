'use client';
import React, { useState, useEffect } from 'react';
import { HiArrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';
// Function to set specific progress data for each week
const generateProgressData = () => {
  return [
    { week: 1, progress: 20, status: 'On track' },
    { week: 2, progress: 50, status: 'On track' },
    { week: 3, progress: 20, status: 'Delayed' },
    { week: 4, progress: 20, status: 'Delayed' },
    { week: 5, progress: 40, status: 'On track' },
    { week: 6, progress: 50, status: 'On track' },
    { week: 7, progress: 20, status: 'Delayed' },
    { week: 8, progress: 60, status: 'On track' },
    { week: 9, progress: 90, status: 'On track' },
    { week: 10, progress: 88, status: 'On track' },
    { week: 11, progress: 0, status: 'To Come' },
    { week: 12, progress: 0, status: 'To Come' },
    { week: 13, progress: 0, status: 'To Come' },
    { week: 14, progress: 0, status: 'To Come' }
  ];
};

function ProjectInfo() {
  const [progressData, setProgressData] = useState([]);
  const [data, setData] = useState([]); // Data to control dynamic updates

  useEffect(() => {
    const data = generateProgressData(); // Set specific progress data for each week
    setProgressData(data);
    setData(data); // Set data to control the progress dynamically
  }, []);

  return (
    <div className="min-h-screen w-full bg-gray-100 font-sans py-8 px-6">
      {/* Go Back to Homepage Button */}
      <Link
        to='/sign'
        className="absolute top-10 left-10 bg-white text-orange-600 rounded-full p-3 shadow-md hover:bg-orange-100 transition duration-300 z-20"
        title="Back to Home"
        >
        <HiArrowLeft size={20} />
        </Link>
      <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-orange-500 mb-6">Project Progress Report</h1>

        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Progress by Week</h2>
        <p className="text-lg text-gray-600 mb-6">
          This is the progress report for the project spanning over 14 weeks. Current progress is shown per week.
        </p>

        {/* Display each week's progress */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {progressData.map((weekData) => (
            <div
              key={weekData.week}
              className={`bg-white p-6 rounded-lg shadow-md transition-all hover:scale-105 ${
                weekData.week === 10 ? 'border-4 border-orange-500' : ''
              }`} // Highlight Week 10 with a border
            >
              <h3 className="text-xl font-semibold text-orange-600 mb-2">Week {weekData.week}</h3>
              <div className="text-sm text-gray-500 mb-2">
                {weekData.status === 'To Come' ? 'To Come' : `Progress: ${weekData.progress}%`}
              </div>

              {/* Progress Bar */}
              {weekData.status !== 'To Come' && (
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200">
                        {weekData.status}
                      </span>
                    </div>
                  </div>
                  <div className="flex mb-2 items-center justify-between">
                    <div className="w-full bg-gray-200 rounded-full">
                      <div
                        className="bg-orange-500 text-xs leading-none py-1 text-center text-white"
                        style={{ width: `${weekData.progress}%` }}
                      >
                        {weekData.progress}%
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Display Week 7 (Current Week) */}
        <div className="mt-8 text-center">
          <h3 className="text-xl font-semibold text-gray-700">Week 7 (Current Week)</h3>
          <div className="text-lg text-orange-500">
            Progress: {progressData[6]?.progress}% {/* Week 7 is index 6 */}
          </div>
          <div
            className={`text-lg ${
              progressData[6]?.status === 'On track' ? 'text-green-500' : 'text-red-500'
            }`}
          >
            Status: {progressData[6]?.status}
          </div>
        </div>

      </div>
    </div>
  );
}

export default ProjectInfo;

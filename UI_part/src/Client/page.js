'use client';

import React, { useState, useEffect } from 'react';
import ADFCLogo from '../Client/assets/ADFC_Logo_Full_-_AR_-_White_BG-removebg-preview.png'; // Ensure this path is correct
import { Link } from 'react-router-dom';
import HomeBackground from '../Client/assets/Bladi.jpg';
import { useNavigate } from 'react-router-dom';
import { useWorker } from "../Worker/WorkerContext";


export default function Home() {
  const [showNext, setShowNext] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [workspace, setWorkspace] = useState('');
  const navigate = useNavigate();
  const { setWorkerWorkspace } = useWorker();
  

  // Timer to show popup after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleWorkspaceSubmit = (e) => {
    e.preventDefault();
    // Handle workspace submission here
    console.log('Workspace entered:', workspace);
    setWorkerWorkspace(1);
    navigate('/Worker/Profile');
    
  };

  const nextProjectInfo = {
    developers: ['Amieur Lilya Fatima-Zohra', 'Yasmine Senour', 'Afnane Karraoui', 'Feddag Amel', 'Badri Amouri'],
    latestUpdate: 'April 7, 2025 – UI improvements and bug fixes',
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-blue-100 font-sans">
      {/* Navbar */}
      <nav className="h-20 w-full bg-white shadow-md flex items-center justify-between px-6">
        <div className="flex items-center gap-4">
          {/*<Image src={logoa} alt="ADFC Logo" className="h-20 w-auto" /> */}
        </div>
        <ul className="flex items-center gap-6 text-gray-600 font-medium">
          <li><Link to='/Client/project' className="hover:text-orange-500">Project</Link></li>
          <li><Link to="/Client/About" className="hover:text-orange-500">About</Link></li>
          <li><Link to="/Client/Contact" className="hover:text-orange-500">Contact</Link></li>
          <li>
            <Link to='/Client/AuthForm'>
              <button className="bg-orange-700 hover:bg-orange-800 text-white text-sm px-4 py-2 rounded-md transition">
                Sign-in
              </button>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section
        className="relative h-[50vh] flex items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${HomeBackground})` }} // Use the imported bg image
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 z-0" />
        <div className="px-10 mb-36 max-w-xl z-10">
          <h1 className="text-5xl font-bold text-white leading-tight">
            Planning things<br />is our mission.
          </h1>
        </div>

        <div className="absolute bottom-12 right-12 w-80 bg-orange-500 rounded-md text-white shadow-lg overflow-hidden hidden md:block z-10">
          <div className="p-4 font-bold text-sm">Featured Project</div>
          <div className="px-4 pb-4 text-center text-sm">
            {showNext ? (
              <div>
                <div className="text-sm font-semibold">Developers:</div>
                <ul className="text-xs text-gray-200 mb-2">
                  {nextProjectInfo.developers.map((dev, i) => <li key={i}>{dev}</li>)}
                </ul>
                <div className="text-sm font-semibold">Latest Update:</div>
                <p className="text-xs text-gray-200">{nextProjectInfo.latestUpdate}</p>
              </div>
            ) : (
              <span>The National Higher School of<br />Artificial Intelligence</span>
            )}
          </div>
          <div className="flex justify-between bg-orange-600 text-xs px-4 py-2">
            <button
              className={`hover:underline cursor-pointer ${!ADFCLogo ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={() => setShowNext(false)}
              disabled={!ADFCLogo}
            >
              &larr; Back
            </button>
            <button
              className={`hover:underline cursor-pointer ${ADFCLogo ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={() => setShowNext(true)}
              disabled={ADFCLogo}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* Functionalities */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Functionalities</h2>
          <p className="text-gray-500 mt-2">Discover the key features our system provides.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-orange-500 mb-2">Employee Stats</h3>
            <p className="text-gray-600 text-sm">Gain insights into your workforce with real-time employee analytics and reporting tools.</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-orange-500 mb-2">Timetabling</h3>
            <p className="text-gray-600 text-sm">Automate schedules and efficiently manage time blocks for various departments.</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-orange-500 mb-2">Staff Estimation</h3>
            <p className="text-gray-600 text-sm">Predict staffing needs based on workload, seasons, or special projects.</p>
          </div>
        </div>
      </section>

      {/* Worker Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 shadow-xl max-w-md w-full">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Worker Verification</h2>
            <p className="mb-4 text-gray-600">Are you a worker? Please enter your workspace:</p>
            
            <form onSubmit={handleWorkspaceSubmit}>
              <input
                type="password"
                value={workspace}
                onChange={(e) => setWorkspace(e.target.value)}
                placeholder="Enter your Password"
                className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
              
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowPopup(false)}
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
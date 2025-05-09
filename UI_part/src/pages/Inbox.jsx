
import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';

// Table cell styles
const TdStyle = {
  ThStyle: `px-6 py-4 text-left text-sm font-bold text-white bg-primary border-b border-white`,
  TdStyle: `px-6 py-4 bg-blue-50 text-gray-700 border-b border-gray-200`,
  TdStyle2: `px-6 py-4 bg-white text-gray-800 border-b border-gray-200`,
};

// Table component
const Table = ({ projects }) => {
  const navigate = useNavigate();
  const handleGoToProjectDetails = () => navigate('/settings');

  return (
    <div className="overflow-x-auto shadow-lg rounded-xl bg-white">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className={TdStyle.ThStyle}>Project ID</th>
            <th className={TdStyle.ThStyle}>Project Name</th>
            <th className={TdStyle.ThStyle}>Start Date</th>
            <th className={TdStyle.ThStyle}>End Date</th>
            <th className={TdStyle.ThStyle}>Complexity</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {projects.map((project) => (
            <tr
              key={project.name_id}
              onClick={handleGoToProjectDetails}
              className="cursor-pointer transition duration-300 hover:bg-blue-100"
            >
              <td className={TdStyle.TdStyle}>{project.name_id}</td>
              <td className={TdStyle.TdStyle2}>{project.name}</td>
              <td className={TdStyle.TdStyle}>{project.start}</td>
              <td className={TdStyle.TdStyle2}>{project.end}</td>
              <td className={TdStyle.TdStyle}>{project.complexity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Main component
const SearchProjects = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [projects, setProjects] = useState([]);

  // Mock project data
  const projectData = [
    { name_id: "p1", name: "Project One", start: "2025-04-01", end: "2025-06-01", complexity: "M" },
    { name_id: "p2", name: "Project Two", start: "2025-04-15", end: "2025-06-30", complexity: "H" },
    { name_id: "p3", name: "Project Three", start: "2025-05-01", end: "2025-07-01", complexity: "S" },
  ];

  // Filter projects by search query
  const handleSearch = () => {
    const filtered = searchQuery
      ? projectData.filter(p => p.name_id.toLowerCase().includes(searchQuery.toLowerCase()))
      : [];
    setProjects(filtered);
  };

  return (
    <section className="min-h-screen w-full bg-gradient-to-r from-blue-50 to-blue-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-3xl w-full max-w-4xl p-10">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-primary mb-8">Search Projects</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <TextField
            label="Search by Project ID"
            variant="outlined"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            sx={{
              width: "100%",
              maxWidth: 500,
              borderRadius: "16px",
              '& .MuiOutlinedInput-root': {
                borderRadius: '16px',
              },
            }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSearch}
            sx={{
              height: "56px",
              borderRadius: "16px",
              px: 4,
              textTransform: "none",
              fontWeight: "bold",
            }}
          >
            Search
          </Button>
        </div>

        {projects.length > 0 ? (
          <>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Projects Found</h3>
            <Table projects={projects} />
          </>
        ) : (
          <p className="text-center text-gray-500 mt-6 italic">No projects found. Try searching for a valid ID.</p>
        )}
      </div>
    </section>
  );
};

export default SearchProjects;


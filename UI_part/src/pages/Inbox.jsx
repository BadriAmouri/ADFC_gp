import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const SearchProjects = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Sample data
  const projectData = [
    { name_id: "p1", name: "Project One", start_date: "2025-04-01", end_date: "2025-06-30", complexity: "S" },
    { name_id: "p2", name: "Project Two", start_date: "2025-05-01", end_date: "2025-07-15", complexity: "M" },
    { name_id: "p3", name: "Project Three", start_date: "2025-06-01", end_date: "2025-08-20", complexity: "L" },
    // Add more sample projects as needed
  ];

  const [projects, setProjects] = useState(projectData); // <-- Initialize with all projects

  // Function to handle search
  const handleSearch = () => {
    if (searchQuery) {
      const filteredProjects = projectData.filter(project =>
        project.name_id.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setProjects(filteredProjects);
    } else {
      setProjects(projectData); // <-- If empty search, show all
    }
  };

  return (
    <section className="bg-white font-futura pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
      <div className="container px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-8">
            Search Projects
          </h2>
          {/* Search Bar */}
          <div className="flex justify-center mb-10">
            <TextField
              label="Search by Project ID"
              variant="outlined"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              sx={{ width: "100%", maxWidth: "500px", marginRight: "10px", border: "2px dashed" }}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleSearch}
              sx={{ height: "56px" }}
            >
              Search
            </Button>
          </div>
        </div>

        {/* Projects Table */}
        <h2 className="text-xl sm:text-3xl font-bold text-primary mt-10 mb-6">
          Projects Searched
        </h2>
        <Table projects={projects} />
      </div>
    </section>
  );
};

export default SearchProjects;


// ------------------ Table Component ------------------

const TdStyle = {
  ThStyle: `w-1/6 min-w-[160px] border-l text-white border-transparent py-4 px-3 text-lg font-medium lg:py-7 lg:px-4`,
  TdStyle: `text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-5 px-2 text-center text-base font-medium`,
  TdStyle2: `text-dark border-b border-[#E8E8E8] bg-white dark:border-dark dark:bg-dark-2 dark:text-dark-7 py-5 px-2 text-center text-base font-medium`,
};

const Table = ({ projects }) => {
  const navigate = useNavigate();

  const handleGoToProjectDetails = (projectId) => {
    // You can navigate to a project detail page with projectId if needed
    navigate('/settings'); // Example
  };

  return (
    <div className="max-w-full overflow-x-auto bg-white dark:bg-dark py-6">
      <table className="w-full table-auto">
        <thead className="text-center bg-primary">
          <tr>
            <th className={TdStyle.ThStyle}>Project Id</th>
            <th className={TdStyle.ThStyle}>Project Name</th>
            <th className={TdStyle.ThStyle}>Start Date</th>
            <th className={TdStyle.ThStyle}>End Date</th>
            <th className={TdStyle.ThStyle}>Complexity</th>
          </tr>
        </thead>

        <tbody>
          {projects.length > 0 ? (
            projects.map((project, index) => (
              <tr key={index} onClick={() => handleGoToProjectDetails(project.name_id)} className="cursor-pointer">
                <td className={TdStyle.TdStyle}>{project.name_id}</td>
                <td className={TdStyle.TdStyle2}>{project.name}</td>
                <td className={TdStyle.TdStyle}>{project.start_date}</td>
                <td className={TdStyle.TdStyle2}>{project.end_date}</td>
                <td className={TdStyle.TdStyle}>{project.complexity}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center py-10 text-gray-500">
                No projects found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

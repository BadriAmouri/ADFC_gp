import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import Calendar from "react-calendar";

const SearchProjects = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [projects, setProjects] = useState([]);
  
  // Sample data
  const projectData = [
    { name_id: "p1", name: "Project One", description: "Description of Project One" },
    { name_id: "p2", name: "Project Two", description: "Description of Project Two" },
    { name_id: "p3", name: "Project Three", description: "Description of Project Three" },
    // Add more sample projects as needed
  ];

  // Function to handle search
  const handleSearch = () => {
    if (searchQuery) {
      const filteredProjects = projectData.filter(project =>
        project.name_id.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setProjects(filteredProjects);
    } else {
      setProjects([]);
    }
  };
  

  return (
    <section className="bg-white font-futura pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
      <div className="container  px-4">
        <div className="text-center max-w-2xl ">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
             Search Projects 
          </h2>
           {/* Second Section - Search Bar */}
        <div className="flex justify-center mb-10">
          <TextField
            label="Search by Project ID"
            variant="outlined"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            sx={{ width: "100%", maxWidth: "500px", marginRight: "10px", border : "2px dashed" }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSearch}
            sx={{ height: "50px" }}
          >
            Search
          </Button>
        </div>


           
           
        </div>
        
        <h2 className="text-xl sm:text-5xl font-bold text-primary mt-10 ">
             Projects Searched
          </h2>
        <Table/>
        
      </div>
    </section>
  );
};

export default SearchProjects;









const TdStyle = {
  ThStyle: `w-1/6 min-w-[160px] border-l  text-black border-transparent py-4 px-3 text-lg font-medium  lg:py-7 lg:px-4`,
  TdStyle: `text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-5 px-2 text-center text-base font-medium`,
  TdStyle2: `text-dark border-b border-[#E8E8E8] bg-white dark:border-dark dark:bg-dark-2 dark:text-dark-7 py-5 px-2 text-center text-base font-medium`,
  TdButton: `inline-block px-6 py-2.5 border rounded-md border-primary text-primary hover:bg-primary hover:text-white font-medium`,
}
const Table = () => {
  const navigate = useNavigate();

  const handleGoToProjectDetails = () => {
    navigate('/settings');
  };
  return (
    <section className="bg-white dark:bg-dark py-20 lg:py-[120px]">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full">
            <div className="max-w-full overflow-x-auto">
              <table className="w-full table-auto">
                <thead className="text-center bg-primary">
                  <tr>
                    <th className={TdStyle.ThStyle}>Project Id</th>
                    <th className={TdStyle.ThStyle}>Project Name</th>
                    <th className={TdStyle.ThStyle}>Start date </th>
                    <th className={TdStyle.ThStyle}>End date</th>
                    <th className={TdStyle.ThStyle}>Complexity</th>
                  </tr>
                </thead>

                <tbody>
                  <tr onClick={handleGoToProjectDetails} className="cursor-pointer">
                    <td className={TdStyle.TdStyle}>01</td>
                    <td className={TdStyle.TdStyle2}>learum pselum</td>
                    <td className={TdStyle.TdStyle}>2025-04-01</td>
                    <td className={TdStyle.TdStyle2}>2025-06-30</td>
                    <td className={TdStyle.TdStyle}>S</td>
                  </tr>
                  <tr>
                  <td className={TdStyle.TdStyle}>01</td>
                    <td className={TdStyle.TdStyle2}>learum pselum</td>
                    <td className={TdStyle.TdStyle}>2025-04-01</td>
                    <td className={TdStyle.TdStyle2}>2025-06-30</td>
                    <td className={TdStyle.TdStyle}>S</td>
                  </tr>
                  <tr>
                  <td className={TdStyle.TdStyle}>01</td>
                    <td className={TdStyle.TdStyle2}>learum pselum</td>
                    <td className={TdStyle.TdStyle}>2025-04-01</td>
                    <td className={TdStyle.TdStyle2}>2025-06-30</td>
                    <td className={TdStyle.TdStyle}>S</td>
                  </tr>
                  <tr>
                  <td className={TdStyle.TdStyle}>01</td>
                    <td className={TdStyle.TdStyle2}>learum pselum</td>
                    <td className={TdStyle.TdStyle}>2025-04-01</td>
                    <td className={TdStyle.TdStyle2}>2025-06-30</td>
                    <td className={TdStyle.TdStyle}>S</td>
                  </tr>
                  <tr>
                  <td className={TdStyle.TdStyle}>01</td>
                    <td className={TdStyle.TdStyle2}>learum pselum</td>
                    <td className={TdStyle.TdStyle}>2025-04-01</td>
                    <td className={TdStyle.TdStyle2}>2025-06-30</td>
                    <td className={TdStyle.TdStyle}>S</td>
                    </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

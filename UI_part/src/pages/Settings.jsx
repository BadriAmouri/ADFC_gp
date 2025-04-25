import React from "react";
import Calender from "../components/Calander/Calender";

const ProjectDetails = () => {
  return (
    <section className="bg-white font-futura pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px] transition-all duration-500 ease-in-out">
      <div className="container px-4">
      <h2 className="text-4xl sm:text-6xl font-bold ml-5 text-black mb-5 transition-transform transform hover:scale-105 duration-300 ease-in-out hover:text-orange-500 text-left">
            Project Details
          </h2>
          <p className="text-base ml-20 text-black mb-2 opacity-80 transition-opacity duration-500 hover:opacity-100 hover:text-orange-500 ease-in-out">
            Dive into the core information of your project including timelines, objectives, and technical aspects.
          </p>
          <p className="text-base ml-20 text-black mb-10 opacity-80 transition-opacity duration-500 hover:opacity-100 hover:text-orange-500 ease-in-out">
            Stay informed about the important milestones and schedules throughout the project lifecycle.
          </p>
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-center gap-8 mt-8">
            <DateItem label="📅 Start Date" value="2025-04-01" />
            <DateItem label="📅 End Date" value="2025-06-30" />
          </div>

          <div className="w-full mt-14 mb-12">
            <ol className="space-y-5">
              <ListItem count={1} text="Project Overview" />
              <ListItem count={2} text="Timeline and Key Deliverables" />
              <ListItem count={3} text="Team Responsibilities" />
              <ListItem count={4} text="Budget Allocation" />
              <ListItem count={5} text="Risk Management" />
            </ol>
          </div>
        </div>

        <SectionTitle title="First Team" extraClass="ml-10"/>
        <TeamTable />

        <SectionTitle title="Second Team" extraClass="ml-10"/>
        <TeamTable />

        <SectionTitle title="Check Project Calendar" extraClass="mt-10" />
        <Calender />
      </div>
    </section>
  );
};

export default ProjectDetails;

const ListItem = ({ count, text }) => {
  return (
    <li className="flex items-center text-base text-black dark:text-black transition-all duration-300 ease-in-out hover:translate-x-2 hover:text-orange-500">
      <span className="flex items-center justify-center w-7 h-7 mr-3 rounded-full text-white font-semibold bg-gradient-to-r from-orange-500 to-orange-600 shadow-md ring-2 ring-white dark:ring-dark-2">
        {count}
      </span>
      {text}
    </li>
  );
};

const DateItem = ({ label, value }) => {
  return (
    <div className="bg-white dark:bg-dark-3 p-6 rounded-xl shadow-md border border-orange-100 hover:shadow-xl transition duration-300 hover:bg-orange-50 w-full sm:w-60">
      <p className="text-lg font-bold text-black mb-1">{label}</p>
      <p className="text-gray-800 text-base">{value}</p>
    </div>
  );
};

const SectionTitle = ({ title, extraClass = "" }) => {
  return (
    <h2 className={`text-xl sm:text-5xl font-bold text-black mb-10 ${extraClass} transition-transform transform hover:scale-105 duration-300 ease-in-out hover:text-orange-500`}>
      {title}
    </h2>
  );
};

const TdStyle = {
  ThStyle: `w-1/6 min-w-[160px] border-l text-black border-transparent py-4 px-3 text-lg font-medium lg:py-7 lg:px-4`,
  TdStyle: `text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-5 px-2 text-center text-base font-medium transition-all duration-300 ease-in-out hover:bg-orange-50`,
  TdStyle2: `text-dark border-b border-[#E8E8E8] bg-white dark:border-dark dark:bg-dark-2 dark:text-dark-7 py-5 px-2 text-center text-base font-medium transition-all duration-300 ease-in-out hover:bg-orange-50`,
  TdButton: `inline-block px-6 py-2.5 border rounded-md border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-medium transition-colors duration-300 ease-in-out`,
};

const TeamTable = () => {
  const teamData = [
    { name: "John Doe", age: 28, contact: "+213 123 456 789", role: "Software Developer", score: 95 },
    { name: "Jane Smith", age: 34, contact: "+213 987 654 321", role: "Product Manager", score: 88 },
    { name: "Ahmed Khalil", age: 25, contact: "+213 555 123 456", role: "UX Designer", score: 91 },
    { name: "Amine Belkacem", age: 29, contact: "+213 789 456 123", role: "Data Scientist", score: 89 },
    { name: "Mira Zaki", age: 32, contact: "+213 666 777 888", role: "Marketing Lead", score: 92 },
  ];

  return (
    <section className="bg-white dark:bg-dark ml-20 py-20 lg:py-[120px] transition-all duration-500 ease-in-out">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full">
            <div className="max-w-full overflow-x-auto">
              <table className="w-full table-auto border border-orange-100 shadow-md">
                <thead className="text-center bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                  <tr>
                    <th className={TdStyle.ThStyle}>Full Name</th>
                    <th className={TdStyle.ThStyle}>Age</th>
                    <th className={TdStyle.ThStyle}>Contact</th>
                    <th className={TdStyle.ThStyle}>Role</th>
                    <th className={TdStyle.ThStyle}>Score</th>
                  </tr>
                </thead>
                <tbody>
                  {teamData.map((item, idx) => (
                    <tr key={idx} className="transition-transform transform hover:scale-105 duration-300 ease-in-out hover:bg-orange-50">
                      <td className={TdStyle.TdStyle}>{item.name}</td>
                      <td className={TdStyle.TdStyle2}>{item.age}</td>
                      <td className={TdStyle.TdStyle}>{item.contact}</td>
                      <td className={TdStyle.TdStyle2}>{item.role}</td>
                      <td className={TdStyle.TdStyle}>{item.score}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

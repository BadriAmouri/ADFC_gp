import React from "react";
import Calender from "../components/Calander/Calender";

const ProjectDetails = () => {
  return (
    <section className="bg-white font-futura pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
      <div className="container  px-4">
        <div className="text-center max-w-2xl ">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
            Project Details
          </h2>
          <p className="text-base text-black mb-2">
            Dive into the core information of your project including timelines,
            objectives, and technical aspects.  Dive into the core information of your project including timelines,
            objectives, and technical aspects. Dive into the core information of your project including timelines,
            objectives, and technical aspects.

          </p>
          <p className="text-base text-black mb-10">
            Stay informed about the important milestones and schedules
            throughout the project lifecycle.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <div>
              <p className="text-lg font-semibold text-primary">Start Date</p>
              <p className="text-gray-800 ">2025-04-01</p>
            </div>
            <div>
              <p className="text-lg font-semibold text-primary">End Date</p>
              <p className="text-gray-800">2025-06-30</p>
            </div>
            </div>
            <div className="w-full mt-10">
      <ol className="space-y-5">
        <ListItem count={1} text="those are project details " />
        <ListItem count={2} text="The point of using Lorem Ipsum" />
        <ListItem count={3} text="The point of using Lorem Ipsum" />
        <ListItem count={4} text="The point of using Lorem Ipsum" />
        <ListItem count={5} text="The point of using Lorem Ipsum" />
      </ol>
    </div>
           
        </div>
        
        <h2 className="text-xl sm:text-5xl font-bold text-primary mt-10 ">
            First Team
          </h2>
        <Table/>
        <h2 className="text-xl sm:text-5xl font-bold text-primary ">
            Second Team
          </h2>
        <Table/>

        <div className="mt-10"></div>
        <h2 className="text-xl sm:text-5xl font-bold text-primary mt-10 ">
            Check Project Calender
          </h2>
        <Calender/>
      </div>
    </section>
  );
};

export default ProjectDetails;



const ListItem = ({ count, text }) => {
  return (
    <li className="text-body-color dark:text-dark-6 flex text-base">
      <span className="relative z-10 mr-2.5 flex h-[26px] w-full max-w-[26px] items-center justify-center rounded text-base text-white">
        <span className="bg-primary absolute top-0 left-0 z-[-1] h-full w-full -rotate-45 rounded"></span>
        {count}
      </span>
      {text}
    </li>
  );
};



const TdStyle = {
  ThStyle: `w-1/6 min-w-[160px] border-l  text-black border-transparent py-4 px-3 text-lg font-medium  lg:py-7 lg:px-4`,
  TdStyle: `text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-5 px-2 text-center text-base font-medium`,
  TdStyle2: `text-dark border-b border-[#E8E8E8] bg-white dark:border-dark dark:bg-dark-2 dark:text-dark-7 py-5 px-2 text-center text-base font-medium`,
  TdButton: `inline-block px-6 py-2.5 border rounded-md border-primary text-primary hover:bg-primary hover:text-white font-medium`,
}
const Table = () => {
  return (
    <section className="bg-white dark:bg-dark py-20 lg:py-[120px]">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full">
            <div className="max-w-full overflow-x-auto">
              <table className="w-full table-auto">
                <thead className="text-center bg-primary">
                  <tr>
                    <th className={TdStyle.ThStyle}>Full Name</th>
                    <th className={TdStyle.ThStyle}>Age</th>
                    <th className={TdStyle.ThStyle}>Contact</th>
                    <th className={TdStyle.ThStyle}>Role</th>
                    <th className={TdStyle.ThStyle}>Score</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className={TdStyle.TdStyle}>John Doe</td>
                    <td className={TdStyle.TdStyle2}>28</td>
                    <td className={TdStyle.TdStyle}>+213 123 456 789</td>
                    <td className={TdStyle.TdStyle2}>Software Developer</td>
                    <td className={TdStyle.TdStyle}>95</td>
                  </tr>
                  <tr>
                    <td className={TdStyle.TdStyle}>Jane Smith</td>
                    <td className={TdStyle.TdStyle2}>34</td>
                    <td className={TdStyle.TdStyle}>+213 987 654 321</td>
                    <td className={TdStyle.TdStyle2}>Product Manager</td>
                    <td className={TdStyle.TdStyle}>88</td>
                  </tr>
                  <tr>
                    <td className={TdStyle.TdStyle}>Ahmed Khalil</td>
                    <td className={TdStyle.TdStyle2}>25</td>
                    <td className={TdStyle.TdStyle}>+213 555 123 456</td>
                    <td className={TdStyle.TdStyle2}>UX Designer</td>
                    <td className={TdStyle.TdStyle}>91</td>
                  </tr>
                  <tr>
                    <td className={TdStyle.TdStyle}>Amine Belkacem</td>
                    <td className={TdStyle.TdStyle2}>29</td>
                    <td className={TdStyle.TdStyle}>+213 789 456 123</td>
                    <td className={TdStyle.TdStyle2}>Data Scientist</td>
                    <td className={TdStyle.TdStyle}>89</td>
                  </tr>
                  <tr>
                    <td className={TdStyle.TdStyle}>Mira Zaki</td>
                    <td className={TdStyle.TdStyle2}>32</td>
                    <td className={TdStyle.TdStyle}>+213 666 777 888</td>
                    <td className={TdStyle.TdStyle2}>Marketing Lead</td>
                    <td className={TdStyle.TdStyle}>92</td>
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

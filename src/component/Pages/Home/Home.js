import React from "react";
import { useState } from "react";
import CourseDetails from "../../CourseDetails/CourseDetails";
import DataTable from "../../DataTable/DataTable";
import Nav from "../../Nav/Nav";

const Home = () => {
  const [coursesData, setCoursesData] = useState([]);
  return (
    <div className="flex justify-between">
      <div>
        <Nav 
        coursesData={coursesData}
        setCoursesData={setCoursesData}
        />
      </div>
      <div>
        <CourseDetails
          coursesData={coursesData}
          setCoursesData={setCoursesData}
        />
        <DataTable coursesData={coursesData} />
      </div>
    </div>
  );
};

export default Home;

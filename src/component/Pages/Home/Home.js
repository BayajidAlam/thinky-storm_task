import React from "react";
import { useState } from "react";
import CourseDetails from "../../CourseDetails/CourseDetails";
import DataTable from "../../DataTable/DataTable";
import Nav from "../../Nav/Nav";

const Home = () => {

  const [coursesData, setCoursesData] = useState([]);
  const [ filtered, setFiltered ] = useState([]);
console.log(filtered);
  return (
    <div className="flex justify-between">
      <div>
        <Nav 
        coursesData={coursesData}
        setFiltered={setFiltered}
        />
      </div>
      <div>
        <CourseDetails
          coursesData={coursesData}
          setCoursesData={setCoursesData}
        />
        <DataTable 
        coursesData={coursesData}
        filtered={filtered}
        />
      </div>
    </div>
  );
};

export default Home;

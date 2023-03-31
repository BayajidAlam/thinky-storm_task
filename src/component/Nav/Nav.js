import React, { useState } from "react";
import "./Nav.css";

const Nav = ({ coursesData,setFiltered }) => {
  // state for category 
  const [category, setCategory] = useState([]);

  // handle category click 
  const handleSelect = (name) => {
    let allCategory = [];
    if (allCategory) {
      allCategory = [...category, name];
      setCategory(allCategory);
    } else {
      allCategory = [name];
      setCategory(allCategory);
    }
    // filtering
    const foundData = coursesData.filter((data)=>{
      if(!category.length){
        return coursesData
      }
      return category.includes(data.category)
    })
    setFiltered(foundData)
  };

  return (
    <div className="mt-20">
      {coursesData.length !== 0 && <p>Category</p>}
      <ul>
        {coursesData.map((course, i) => (
          <li onClick={() => handleSelect(course.category)} key={i}>
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              <p>{course.category}</p>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;

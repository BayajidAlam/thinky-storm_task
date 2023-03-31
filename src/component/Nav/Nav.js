import React, { useState } from "react";
import "./Nav.css";

const Nav = ({ coursesData, setCoursesData }) => {
  const [category, setCategory] = useState([]);
  const handleSelect = (name) => {
    let allCategory = [];
    if (allCategory) {
      allCategory = [...category, name];
      setCategory(allCategory);
    } else {
      allCategory = [name];
      setCategory(allCategory);
    }

    const selectedCategories = category;

    const filteredProducts = coursesData.filter((product) => {
      return selectedCategories.every((cat) => product.category.includes(cat));
    });
    setCoursesData(filteredProducts);
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

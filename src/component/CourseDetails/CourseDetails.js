import React from "react";

const CourseDetails = ({ coursesData, setCoursesData }) => {
  
  const handleAddDetails = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = event.target.name.value;
    const instructor = event.target.instructor.value;
    const category = event.target.category.value;
    const price = event.target.price.value;

    const courseData = {
      name,
      instructor,
      category,
      price,
    };

    let allCourse = [];
    if (allCourse) {
      allCourse = [...coursesData, courseData];
      setCoursesData(allCourse);
      form.reset();
    } else {
      allCourse = [courseData];
      setCoursesData(allCourse);
      form.reset();
    }
  };

  return (
    <section className="container mx-auto">
      <form onSubmit={handleAddDetails}>
        <div
          className="flex justify-between
       items-center mt-20 gap-4"
        >
          <div className="space-y-2">
            <p className="text-xl">Name</p>
            <input
              name="name"
              className="border w-72 border-gray-400"
              type="text"
            />
          </div>
          <div className="space-y-2">
            <p className="text-xl">Instructor</p>
            <input
              name="instructor"
              className="border w-72 border-gray-400"
              type="text"
            />
          </div>
          <div className="space-y-2">
            <p className="text-xl">Category</p>
            <input
              name="category"
              className="border w-72 border-gray-400"
              type="text"
            />
          </div>
          <div className="space-y-2">
            <p className="text-xl">Price</p>
            <input
              name="price"
              className="border w-72 border-gray-400"
              type="text"
            />
          </div>
        </div>
        <div className="text-center mt-2 mb-6">
          <button
            type="submit"
            className="bg-black mt-6 text-white font-bold px-4 py-1"
          >
            Add Course
          </button>
        </div>
      </form>
    </section>
  );
};

export default CourseDetails;

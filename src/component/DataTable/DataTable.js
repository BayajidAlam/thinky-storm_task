import React from "react";

const DataTable = ({ coursesData }) => {
  let content = "";
  if(coursesData.length === 0){
    content = <p className="text-center">No Data Found!</p>
  }
  else {
    content = (
      <>
        {" "}
        <h1 className="text-center text-2xl">Course Details</h1>
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-center text-sm font-light">
                  <thead className="border-b font-medium dark:border-neutral-500">
                    <tr>
                      <th scope="col" className="px-6 py-4">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Instructor
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Category
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {coursesData.map((courseData, i) => (
                      <tr key={i} className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          {courseData.name}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {courseData.instructor}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {courseData.category}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {courseData.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return <section className="pt-8">{content}</section>;
};

export default DataTable;

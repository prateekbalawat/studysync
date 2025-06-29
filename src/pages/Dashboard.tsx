// import { Link } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import { courses } from "../data/courses";

// const Dashboard = () => {
//   const { user } = useAuth();
//   if (!user) return;

//   const dashboard = JSON.parse(
//     localStorage.getItem("dashboard") || "{}"
//   ) as Record<string, string[]>;
//   const userCourses = dashboard?.[user] ?? [];

//   return (
//     <div className="bg-gray-100 min-h-screen m-5 md:m-0">
//       <div className="max-w-7xl mx-auto py-6">
//         <h1 className="text-2xl font-bold text-gray-800 mb-6">
//           Welcome{user ? `, ${user}` : ""}!
//         </h1>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {courses.map((course) => (
//             <div
//               key={course.id}
//               className="bg-white shadow p-6 rounded-lg flex flex-col justify-between h-60"
//             >
//               <div>
//                 <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
//                 <p className="text-gray-600">{course.description}</p>
//               </div>

//               <Link to={`/course/${course.id}`}>
//                 <button className="mt-4 bg-blue-600 text-white px-4 py-2 w-24 rounded hover:bg-blue-700">
//                   Start
//                 </button>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import { useEffect, useState } from "react";
import { courses, type Course } from "../data/courses"; // path to your courses file
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const [addedCourses, setAddedCourses] = useState<string[]>([]);
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    const storedIdsObj = JSON.parse(localStorage.getItem("dashboard") || "{}");
    if (!user) return;
    const storedIds = storedIdsObj[user] ? storedIdsObj[user] : [];
    setAddedCourses(storedIds);

    // Filter courses based on those IDs
    const selected = courses.filter((course) => storedIds.includes(course.id));
    setFilteredCourses(selected);
  }, []);

  const removeCourse = (id: string) => {
    if (!user) return;
    const dashboard = JSON.parse(
      localStorage.getItem("dashboard") || "{}"
    ) as Record<string, string[]>;
    const updated = addedCourses.filter((courseId) => courseId !== id);
    dashboard[user] = updated;
    setAddedCourses(updated);
    localStorage.setItem("dashboard", JSON.stringify(dashboard));
    setFilteredCourses(courses.filter((course) => updated.includes(course.id)));
  };

  return (
    <div className="bg-gray-100 min-h-screen m-5 md:m-0">
      <div className="max-w-7xl mx-auto py-6">
        <h1 className="text-2xl text-center text-gray-800  font-bold mb-6">
          My Dashboard
        </h1>

        {filteredCourses.length === 0 ? (
          <div className="text-center text-gray-600">
            <p>No courses added yet.</p>
            <Link
              to="/explore"
              className="text-blue-500 underline mt-2 inline-block"
            >
              Browse courses
            </Link>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-lg shadow p-6">
                <h2 className="text-lg  text-gray-600 font-semibold mb-2">
                  {course.title}
                </h2>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex justify-between items-center">
                  <Link to={`/course/${course.id}`}>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded">
                      Start
                    </button>
                  </Link>
                  <button
                    onClick={() => removeCourse(course.id)}
                    className="text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

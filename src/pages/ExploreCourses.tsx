import { useAuth } from "../context/AuthContext";
import { courses } from "../data/courses";

const ExploreCourses = () => {
  const { user } = useAuth();

  function addToDashboard(selectedCourse: string) {
    if (!user) return;

    const dashboard = JSON.parse(
      localStorage.getItem("dashboard") || "{}"
    ) as Record<string, string[]>;
    const userCourses = dashboard?.[user] ?? [];

    console.log("usercourses", userCourses, selectedCourse);

    const isAlreadyAdded = userCourses.includes(selectedCourse);

    if (isAlreadyAdded) {
      alert("Course already added!");
      return;
    }

    // Add the course
    const updatedCourses = [...userCourses, selectedCourse];
    dashboard[user] = updatedCourses;
    console.log("updatedcourse", updatedCourses, dashboard);

    localStorage.setItem("dashboard", JSON.stringify(dashboard));

    alert("Course added to dashboard!");
  }

  return (
    <div className="bg-gray-100 min-h-screen m-5 md:m-0">
      <div className="max-w-7xl mx-auto py-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Explore Courses
        </h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white shadow p-6 rounded-lg flex flex-col justify-between h-60"
            >
              <div>
                <h3 className="text-lg  text-gray-600 font-semibold mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600">{course.description}</p>
              </div>

              <button
                onClick={() => addToDashboard(course.id)}
                className="mt-4 bg-blue-600 text-white px-4 py-2 w-48 rounded hover:bg-blue-700"
              >
                Add to Dashboard
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreCourses;

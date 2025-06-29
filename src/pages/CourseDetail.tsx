import { useParams } from "react-router-dom";
import { useState } from "react";
import { courses } from "../data/courses.ts";

const CourseDetails = () => {
  const { id } = useParams();
  const course = courses.find((c) => c.id === id);
  const lessons = course?.modules || [];
  const videos = course?.videos || [];
  const lessonAndVideos = videos.map((item, i) => [lessons[i], item]);

  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [expandedLessons, setExpandedLessons] = useState<string[]>([]);

  const handleMarkComplete = (lessonId: string) => {
    setCompletedLessons((prev) =>
      prev.includes(lessonId)
        ? prev.filter((id) => id !== lessonId)
        : [...prev, lessonId]
    );
  };

  const toggleExpand = (lessonId: string) => {
    setExpandedLessons((prev) =>
      prev.includes(lessonId)
        ? prev.filter((id) => id !== lessonId)
        : [...prev, lessonId]
    );
  };

  const progress = Math.floor((completedLessons.length / lessons.length) * 100);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl text-blue-600 font-bold mb-4">
          {course?.title}
        </h1>
        <p className="text-gray-600 mb-6">{course?.description}</p>

        <div className="space-y-4">
          {lessonAndVideos.map((lessonAndVideo) => (
            <div
              key={lessonAndVideo[0]}
              className="bg-white p-4 shadow rounded"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleExpand(lessonAndVideo[0])}
              >
                <h3 className="text-lg text-gray-800 font-semibold">
                  {lessonAndVideo[0]}
                </h3>
                <svg
                  className={`w-5 h-5 transform transition-transform duration-200 ${
                    expandedLessons.includes(lessonAndVideo[0])
                      ? "rotate-180"
                      : ""
                  }`}
                  fill="black"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>

              {expandedLessons.includes(lessonAndVideo[0]) && (
                <div className="mt-4">
                  <p className="text-sm text-gray-600 mb-3">
                    <div className="aspect-w-16 aspect-h-9 mb-6">
                      <iframe
                        className="w-full h-[400px] rounded-lg"
                        src={lessonAndVideo[1]}
                        title="Lesson Video"
                        frameBorder="0"
                        allowFullScreen
                      />
                    </div>
                  </p>
                  <button
                    onClick={() => handleMarkComplete(lessonAndVideo[0])}
                    className={`px-4 py-2 rounded text-white ${
                      completedLessons.includes(lessonAndVideo[0])
                        ? "bg-green-600 hover:bg-green-700"
                        : "bg-blue-600 hover:bg-blue-700"
                    }`}
                  >
                    {completedLessons.includes(lessonAndVideo[0])
                      ? "Completed"
                      : "Mark Complete"}
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mt-8">
          <p className="mb-2 text-gray-600 font-medium">
            Progress: {progress}%
          </p>
          <div className="w-full bg-gray-200 rounded h-4">
            <div
              className="bg-blue-600 h-4 rounded"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;

import StudyImage from "../assets/study.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Revolutionize the way you study with{" "}
            <span className="text-blue-600">StudySync</span>
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Access curated content, track your progress, and stay ahead — all in
            one powerful platform.
          </p>
          <Link to="/signup">
            <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
              Get Started
            </button>
          </Link>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2">
          <img
            src={StudyImage}
            alt="Study Illustration"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-12 bg-white text-center px-4">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900">
        Loved what you saw?
      </h2>
      <p className="mb-6 text-gray-600">
        Create your free account today and join the StudySync community.
      </p>
      <Link to="/signup">
        <button className="bg-indigo-600 text-white font-medium px-5 py-2 rounded hover:bg-indigo-700 transition">
          Sign Up Now
        </button>
      </Link>
    </section>
  );
};

export default CTA;

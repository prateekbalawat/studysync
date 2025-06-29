const Features = () => {
  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">
          Why Choose StudySync?
        </h2>
        <p className="text-gray-600 mb-12">
          Explore how StudySync helps students learn smarter, not harder.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Feature 1 */}
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Curated Content
            </h3>
            <p className="text-gray-600">
              Access hand-picked study materials that align with your
              curriculum.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Track Progress
            </h3>
            <p className="text-gray-600">
              Monitor your learning and stay on top with smart insights and
              reminders.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Anytime Access
            </h3>
            <p className="text-gray-600">
              Study from anywhere on any device with a seamless user experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

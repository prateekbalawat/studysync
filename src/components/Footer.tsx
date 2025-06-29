const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-700 py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} StudySync. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="#"
            className="text-gray-400 hover:text-white text-sm transition"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white text-sm transition"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white text-sm transition"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

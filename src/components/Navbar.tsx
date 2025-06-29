import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          StudySync
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          {!user ? (
            <>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/explore">Explore</Link>
              </li>
              <li>
                <button onClick={logout}>Logout</button>
              </li>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-3 px-4">
          {!user ? (
            <>
              <Link className="block" to="/">
                Home
              </Link>
              <Link className="block" to="/login">
                Login
              </Link>
              <Link className="block" to="/signup">
                Signup
              </Link>
            </>
          ) : (
            <>
              <Link className="block" to="/dashboard">
                Dashboard
              </Link>
              <Link className="block" to="/explore">
                Explore
              </Link>
              <button className="block" onClick={logout}>
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

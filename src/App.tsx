import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import ExploreCourses from "./pages/ExploreCourses";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CourseDetail from "./pages/CourseDetail";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/explore" element={<ExploreCourses />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/course/:id" element={<CourseDetail />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;

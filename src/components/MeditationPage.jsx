import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const MeditationPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/signin"); // Redirect to sign-in if no token is found
    }
  }, [navigate]);

  const courses = [
    { title: "Mindfulness Basics", image: "/mindfulness1.png", bgColor: "bg-gray-800" },
    { title: "Managing Anxiety", image: "/anxiety.png", bgColor: "bg-blue-900" },
    { title: "Improving Focus", image: "/focus1.png", bgColor: "bg-green-900", customClass: "object-top" },
    { title: "Sleep Meditation", image: "/sleep.png", bgColor: "bg-purple-900" },
  ];

  // Function to navigate to Meditation Screen when Start button is clicked
  const handleStartClick = (courseTitle) => {
    navigate("/meditation-screen", { state: { course: courseTitle } });
  };

  return (
    <div className="bg-gray-950 min-h-screen text-center px-6 pb-20">
      <h1 className="text-3xl font-bold text-white pt-6">Meditation Courses</h1>
      <p className="text-gray-400 mb-6">Choose a meditation course to begin</p>

      {/* Meditation Courses */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {courses.map((course, index) => (
          <div key={index} className={`shadow-lg rounded-lg overflow-hidden ${course.bgColor} text-white`}>
            <img 
              src={course.image} 
              alt={course.title} 
              className={`w-full h-40 object-cover ${course.customClass || ""}`} 
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{course.title}</h3>
              <button 
                className="mt-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded w-full"
                onClick={() => handleStartClick(course.title)}
              >
                Start
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Daily Thought Section */}
      <div className="mt-8 p-6 bg-gray-800 text-white rounded-lg flex justify-between items-center">
        <div>
          <h3 className="text-lg font-bold">Daily Thought</h3>
          <p className="text-gray-400 text-sm">MEDITATION • 3-10 MIN</p>
        </div>
        <button className="text-white text-2xl">▶</button>
      </div>

      {/* Back to Home */}
      <Link to="/home">
        <button className="mt-6 px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded">Back to Home</button>
      </Link>
    </div>
  );
};

export default MeditationPage;

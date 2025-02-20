import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-50">
      <h1 className="text-4xl font-bold mb-6">Welcome Back!</h1>
      <p className="text-lg mb-4">What would you like to do today?</p>
      <div className="grid grid-cols-2 gap-4">
        <Link to="/course-details">
          <button className="p-4 bg-blue-300 rounded" aria-label="Explore available courses">
            Explore Courses
          </button>
        </Link>
        <Link to="/meditate">
          <button className="p-4 bg-purple-300 rounded" aria-label="Start a meditation session">
            Start Meditation
          </button>
        </Link>
        <Link to="/music-player">
          <button className="p-4 bg-yellow-300 rounded" aria-label="Listen to music">
            Listen to Music
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

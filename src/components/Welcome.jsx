import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-300">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Meditation App</h1>
      <Link to="/choose-topic">
        <button className="p-2 bg-blue-500 text-white rounded">
          Get Started
        </button>
      </Link>
    </div>
  );
};

export default Welcome;

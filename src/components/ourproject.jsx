import React from "react";
import { Link } from "react-router-dom";

const Meditate = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-purple-50">
      <h1 className="text-4xl font-bold mb-6">Let’s Meditate</h1>
      <p className="text-lg mb-4">Find a quiet place, and let’s begin.</p>
      <div className="flex flex-col items-center space-y-4">
        <button className="p-4 bg-blue-300 rounded">Start 5-Minute Meditation</button>
        <button className="p-4 bg-green-300 rounded">Start 10-Minute Meditation</button>
        <button className="p-4 bg-yellow-300 rounded">Custom Timer</button>
      </div>
      <Link to="/home" className="mt-6">
        <button className="p-2 bg-blue-500 text-white rounded">Back to Home</button>
      </Link>
    </div>
  );
};

export default Meditate;

import React from "react";
import { Link } from "react-router-dom";

const CourseDetails = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">Meditation Courses</h1>
      <ul className="w-1/2 space-y-4">
        <li className="p-4 bg-blue-100 rounded">Mindfulness Basics</li>
        <li className="p-4 bg-green-100 rounded">Managing Anxiety</li>
        <li className="p-4 bg-yellow-100 rounded">Improving Focus</li>
        <li className="p-4 bg-purple-100 rounded">Sleep Meditation</li>
      </ul>
      <Link to="/home" className="mt-6">
        <button className="p-2 bg-blue-500 text-white rounded">Back to Home</button>
      </Link>
    </div>
  );
};

export default CourseDetails;

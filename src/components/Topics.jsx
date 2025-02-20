import React from "react";
import { Link } from "react-router-dom";

const ChooseTopic = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">What Brings You Here?</h1>
      <div className="grid grid-cols-2 gap-4">
        <button className="p-4 bg-blue-200 rounded">Reduce Anxiety</button>
        <button className="p-4 bg-green-200 rounded">Improve Focus</button>
        <button className="p-4 bg-yellow-200 rounded">Sleep Better</button>
        <button className="p-4 bg-purple-200 rounded">Personal Growth</button>
      </div>
      <Link to="/set-reminder" className="mt-6">
        <button className="p-2 bg-blue-500 text-white rounded">
          Next
        </button>
      </Link>
    </div>
  );
};

export default ChooseTopic;
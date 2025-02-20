import React from "react";
 import { Link } from "react-router-dom";

const Reminder = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Set a Daily Reminder</h1>
      <input
        type="time"
        className="p-2 border rounded mb-4"
      />
      <Link to="/home">
        <button className="p-2 bg-blue-500 text-white rounded">
          Save & Continue
        </button>
      </Link>
    </div>
  );
}; 
export default Reminder;

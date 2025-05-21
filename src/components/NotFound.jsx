import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="text-xl mt-2">Oops! Page Not Found</p>
      <Link to="/dashboard" className="mt-4">
        <button className="p-2 bg-blue-500 text-white rounded">
          Go Back Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;

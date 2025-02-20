import React from "react";
import { Link } from "react-router-dom";

const MusicPlayer = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-yellow-50">
      <h1 className="text-4xl font-bold mb-6">Relax with Music</h1>
      <p className="text-lg mb-4">Select a track to begin.</p>
      <div className="grid grid-cols-2 gap-4">
        <button className="p-4 bg-blue-200 rounded">Peaceful Piano</button>
        <button className="p-4 bg-green-200 rounded">Ocean Waves</button>
        <button className="p-4 bg-purple-200 rounded">Forest Sounds</button>
        <button className="p-4 bg-pink-200 rounded">Chill Beats</button>
      </div>
      <Link to="/home" className="mt-6">
        <button className="p-2 bg-blue-500 text-white rounded">Back to Home</button>
      </Link>
    </div>
  );
};

export default MusicPlayer;

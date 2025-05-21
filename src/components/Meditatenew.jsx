import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PlayCircle } from 'lucide-react';

const Meditatenew = () => {
  const [userName, setUserName] = useState("User");

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  return (
    <div
      className="flex flex-col min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/bg-image.png')" }}
    >
      {/* Background overlay */}
      <div className="flex flex-col min-h-screen bg-white bg-opacity-80">

        {/* Header */}
        <div className="text-center px-4 py-6">
          <h1 className="text-2xl font-bold">Meditate</h1>
          <p className="text-gray-600 mt-2">
            We can learn how to recognize when our minds are doing their normal everyday acrobatics.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-4 sm:gap-6 overflow-x-auto mb-8">
          {["all-icon.png", "my-heart.png", "new-anxiety.png", "new-sleep.png"].map((icon, i) => (
            <button
              key={i}
              className="flex flex-col items-center text-xs sm:text-sm text-gray-400 hover:text-white transition"
            >
              <img src={`/${icon}`} alt="" className="w-10 sm:w-12" />
            </button>
          ))}
        </div>

        {/* Daily Calm Card */}
        <div className="px-4 mt-6">
          <div className="flex justify-between items-center bg-orange-100 rounded-2xl p-4">
            <div>
              <h2 className="text-lg font-semibold">Daily Calm</h2>
              <p className="text-sm text-gray-500">APR 30 · PAUSE PRACTICE</p>
            </div>
            <button className="text-orange-500 hover:text-orange-600 transition">
              <PlayCircle size={36} />
            </button>
          </div>
        </div>

        {/* Meditation Programs Grid */}
        <div className="grid grid-cols-2 gap-4 px-4 mt-6 mb-24">
          
          {/* 7 Days of Calm */}
          <Link
            to="/meditation-screen"
            className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition relative cursor-pointer"
          >
            <img
              src="/7-days-of-calm.png"
              alt="7 Days of Calm"
              style={{
                width: '176.43px',
                height: '210px',
                objectFit: 'cover',
                margin: '0 auto',
              }}
            />
            <div className="p-2 text-center font-medium">7 Days of Calm</div>
          </Link>

          {/* Anxiety Release */}
          <Link
            to="/meditation-screen"
            className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition relative cursor-pointer"
          >
            <img
              src="/anxiety-release(2).png"
              alt="Anxiety Release"
              style={{
                width: '176.43px',
                height: '210px',
                objectFit: 'cover',
                margin: '0 auto',
              }}
            />
            <div className="p-2 text-center font-medium">Anxiety Release</div>
          </Link>

        </div>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 w-full bg-white bg-opacity-90 p-4 flex justify-around text-gray-500 border-t">
          <Link to="/dashboard" className="flex flex-col items-center text-xs hover:text-black transition">
            <span className="text-lg">🏠</span>
            Home
          </Link>

          <Link to="/welcome-sleep" className="flex flex-col items-center text-xs hover:text-black transition">
            <span className="text-lg">🌙</span>
            Sleep
          </Link>

          <Link to="/Meditatenew" className="flex flex-col items-center text-xs hover:text-black transition">
            <span className="text-lg">💤</span>
            Meditate
          </Link>

          <Link to="/music-player" className="flex flex-col items-center text-xs hover:text-black transition">
            <span className="text-lg">🎶</span>
            Music
          </Link>

          <Link to="/profile" className="flex flex-col items-center text-xs hover:text-black transition">
            <span className="text-lg">👤</span>
            {userName}
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Meditatenew;

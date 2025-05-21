import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SleepStoriesScreen = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const name = localStorage.getItem("username");
    if (!token) {
      navigate("/signin");
    } else if (name) {
      setUsername(name);
    }
  }, [navigate]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="px-4 py-6 sm:py-8 text-center">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">Sleep Stories</h1>
        <p className="text-sm sm:text-base text-indigo-200">
          Soothing bedtime stories to help you fall into a deep and natural sleep
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex justify-start sm:justify-center gap-4 overflow-x-auto px-4 sm:px-0 mb-6">
        {["/all-icon.png", "/my-heart.png", "/new-anxiety.png", "/new-sleep.png"].map((src, i) => (
          <button key={i} className="flex flex-col items-center text-xs sm:text-sm text-gray-400">
            <img src={src} alt="icon" className="w-8 sm:w-10" />
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-4 pb-32 sm:pb-24">
        {/* Featured Story */}
        <div className="bg-gray-800 rounded-3xl p-4 sm:p-6 mb-6">
          <img src="/the-ocean-moon.png" alt="The Ocean Moon" className="w-full rounded-2xl mb-4" />
          <h2 className="text-lg sm:text-xl font-semibold">The Ocean Moon</h2>
          <p className="text-xs sm:text-sm text-indigo-200 mt-1">
            Non-stop 8-hour mixes of our most popular sleep audio
          </p>
          <button className="mt-4 bg-white text-indigo-600 text-sm sm:text-base font-semibold py-2 px-6 rounded-full">
            START
          </button>
        </div>

        {/* Other Stories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { title: "Night Island", img: "/night-island.png" },
            { title: "Sweet Sleep", img: "/sweet-sleep.png" },
          ].map((story, index) => (
            <div key={index} className="bg-indigo-600 rounded-2xl p-3 sm:p-4">
              <img src={story.img} alt={story.title} className="rounded-xl mb-3 w-full h-auto" />
              <h3 className="text-sm sm:text-base font-bold">{story.title}</h3>
              <p className="text-xs sm:text-sm text-indigo-200">45 MIN · SLEEP MUSIC</p>
            </div>
          ))}
        </div>
      </div>

      {/* Play Button at Bottom Center */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <button
          onClick={() => navigate("/sleep-player")}
          className="bg-[#8C8EFF] text-white text-sm sm:text-base font-semibold py-3 px-10 sm:px-16 rounded-full shadow-xl"
        >
          PLAY
        </button>
      </div>
    </div>
  );
};

export default SleepStoriesScreen;

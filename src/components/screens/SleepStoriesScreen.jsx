import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

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
      {/* Wrapper for center alignment on desktop */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col flex-1">

        {/* Header */}
        <div className="py-6 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">Sleep Stories</h1>
          <p className="text-sm sm:text-base text-indigo-200">
            Soothing bedtime stories to help you fall into a deep and natural sleep
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

        {/* Story Cards */}
        <div className="flex-1 overflow-y-auto pb-32 sm:pb-24">
          <div className="rounded-3xl p-5 mb-8 bg-gray-800 relative">
            <img src="/the-ocean-moon.png" alt="The Ocean Moon" className="w-full rounded-2xl mb-4" />
            <h2 className="text-xl sm:text-2xl font-semibold">The Ocean Moon</h2>
            <p className="text-sm text-indigo-200 mt-1">Non-stop 8-hour mixes of our most popular sleep audio</p>
            <button className="mt-5 bg-white text-indigo-600 text-sm font-semibold py-2 px-6 rounded-full hover:bg-indigo-100 transition">
              START
            </button>
          </div>

          {/* Responsive Grid for Additional Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Night Island", img: "night-island.png" },
              { title: "Sweet Sleep", img: "sweet-sleep.png" },
            ].map((item, i) => (
              <div key={i} className="bg-indigo-600 rounded-2xl p-4">
                <img src={`/${item.img}`} alt={item.title} className="rounded-xl mb-3 w-full h-auto" />
                <h3 className="text-base font-bold">{item.title}</h3>
                <p className="text-sm text-indigo-200">45 MIN · SLEEP MUSIC</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 w-full p-4 flex justify-around text-gray-400 bg-gray-900 border-t border-gray-700">
        {[
          { to: "/dashboard", icon: "🏠", label: "Home" },
          { to: "/sleep-play", icon: "🌙", label: "Sleep" },
          { to: "/Meditatenew", icon: "💤", label: "Meditate" },
          { to: "/music-player", icon: "🎶", label: "Music" },
          { to: "/profile", icon: "👤", label: username || "User" },
        ].map(({ to, icon, label }, i) => (
          <Link key={i} to={to} className="flex flex-col items-center text-xs hover:text-white transition">
            <span className="text-lg">{icon}</span>
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SleepStoriesScreen;

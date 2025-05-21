import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const WelcomeSleepScreen = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedName = localStorage.getItem("userName");
    const storedEmail = localStorage.getItem("userEmail");

    if (!token) {
      setTimeout(() => navigate("/signin"), 0);
    } else {
      setUser({
        name: storedName || "Guest",
        email: storedEmail || "No email provided",
      });
    }
  }, [navigate]);

  if (!localStorage.getItem("token")) {
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white bg-gray-900 px-4 relative">
      
      {/* Moon Image */}
      <img
        src="/moon.png"
        alt="Moon"
        className="absolute top-4 left-4 w-10 h-10 sm:w-12 sm:h-12"
      />

      {/* Title */}
      <h1 className="text-lg sm:text-xl font-semibold mb-4 flex items-center gap-2">
        Welcome to <span className="text-blue-400">Sleep</span>
      </h1>

      {/* Welcome Heading */}
      <h2 className="text-2xl sm:text-3xl font-bold text-center">
        Welcome to Sleep
      </h2>

      {/* Description */}
      <p className="text-center text-base sm:text-lg mt-3 px-2 sm:px-8">
        Explore the new king of sleep. It uses sound and visualization to create
        perfect conditions for refreshing sleep.
      </p>

      {/* Image Section */}
      <div className="mt-10 flex justify-center w-full">
        <img
          src="/sleeping-birds.png"
          alt="Sleeping Birds"
          className="w-full max-w-xs sm:max-w-md h-auto"
        />
      </div>

      {/* Get Started Button */}
      <button
        className="font-semibold shadow-md bg-indigo-500 text-white hover:bg-indigo-600 transition w-full max-w-md py-4 rounded-full fixed bottom-5 px-8"
        onClick={() => navigate("/sleep-stories")}
      >
        GET STARTED
      </button>
    </div>
  );
};

export default WelcomeSleepScreen;

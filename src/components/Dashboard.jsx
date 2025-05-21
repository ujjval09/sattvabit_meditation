import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
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
    <div className="flex flex-col items-center text-white bg-[#9ea6ff] relative min-h-screen w-full overflow-hidden px-4">
      <h1 className="text-xl font-normal mb-4 flex items-center gap-2 pt-4">
        <span className="text-sm">Silent</span>
        <img src="/logo.png" alt="Silent Moon Logo" className="h-6" />
        <span className="text-sm">Moon</span>
      </h1>

      <h2 className="text-2xl text-center mt-10">
        <span className="font-bold">Hi {user.name}, Welcome</span>
        <br />
        <span className="text-lg font-normal">to Silent Moon</span>
      </h2>

      <p className="text-center text-sm mt-3 px-4 text-[#EBEAEC] max-w-md">
        Explore the app, Find some peace of mind to prepare for meditation.
      </p>

      {/* Background Image Section */}
      <div
        className="relative w-full max-w-sm mt-12"
        style={{
          height: "258px",
          backgroundImage: "url('/new-for.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
          backgroundSize: "cover",
          margin: "5px",
        }}
      >
        {/* Layered Meditation Image */}
        <div
          className="w-full h-full bg-no-repeat bg-center bg-contain relative"
          style={{
            backgroundImage:
              "url('/meditation-image.png'), url('/second-new.png'), url('/third-new.png')",
            backgroundPosition:
              "center, top calc(50px) center, bottom calc(-5px) center",
            backgroundRepeat: "no-repeat, no-repeat, no-repeat",
            backgroundSize: "contain, contain, contain",
          }}
        />

        {/* Top-right images */}
        <img
          src="/half-new.png"
          alt="Half"
          className="absolute top-2 right-5 w-[50px]"
        />
        <img
          src="/bird-new.png"
          alt="Bird Right"
          className="absolute top-16 right-6 w-[40px]"
        />

        {/* Top-left images */}
        <img
          src="/top-new.png"
          alt="Top"
          className="absolute top-4 left-5 w-[45px]"
        />
        <img
          src="/bird-new.png"
          alt="Bird Left"
          className="absolute top-20 left-8 w-[35px]"
        />
      </div>

      {/* Bottom CTA Section */}
      <div
        className="absolute bottom-0 w-full max-w-sm flex justify-center items-end px-4"
        style={{
          backgroundImage: "url('/base-image.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          height: "190px",
        }}
      >
        <button
          type="button"
          onClick={() => navigate("/choose-topic")}
          className="w-full sm:w-[320px] py-4 mb-4 rounded-full text-sm shadow-md transition bg-white hover:bg-gray-100 text-[#3F414E]"
        >
          GET STARTED
        </button>
      </div>
    </div>
  );
};

export default Dashboard;

import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MeditationScreen = () => {
  const [voice, setVoice] = useState("male");
  const navigate = useNavigate();

  const handlePlay = (trackTitle, trackFile) => {
    navigate("/now-playing-screen", { state: { title: trackTitle, audioSrc: trackFile } });
  };

  return (
    <div className="min-h-screen flex flex-col items-center">
      
      <div
        className="w-full h-[370px] flex items-center justify-between px-4 relative"
        style={{
          backgroundImage: `url("/meditation-bg.jpg")`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          maxWidth: "500px",
        }}
      >
    
        <button className="absolute left-4 text-white" onClick={() => navigate(-1)}>←</button>

        
        <div className="absolute right-4 flex space-x-4">
          <button className="text-white" onClick={() => alert("Added to favorites!")}>♡</button>
          <a href="/focus-attention-female.mp3" download>
            <button className="text-white">⬇</button>
          </a>
        </div>
      </div>

      
      <div className="w-full max-w-md p-4 bg-white shadow rounded-md text-gray-800 mt-4">
        <h2 className="text-2xl font-bold text-gray-900">Happy Morning</h2>
        <p className="text-sm text-gray-500 font-semibold">COURSE</p>
        <p className="text-gray-600 mt-2">
          Ease the mind into a restful night’s sleep with these deep, ambient tones.
        </p>
      </div>

      
      <div className="flex space-x-4 mt-6">
        <button onClick={() => setVoice("male")} className={`px-4 py-2 rounded ${voice === "male" ? "bg-blue-500 text-white" : "bg-gray-300"}`}>
          Male Voice
        </button>
        <button onClick={() => setVoice("female")} className={`px-4 py-2 rounded ${voice === "female" ? "bg-blue-500 text-white" : "bg-gray-300"}`}>
          Female Voice
        </button>
      </div>

      
      <div className="w-full max-w-md space-y-4 mt-6">
        <button className="w-full py-3 bg-white shadow rounded flex justify-between items-center px-4" onClick={() => handlePlay("Focus Attention", "/focus-attention.mp3")}>
          Focus Attention <span>▶ 10 MIN</span>
        </button>
        <button className="w-full py-3 bg-white shadow rounded flex justify-between items-center px-4" onClick={() => handlePlay("Body Scan", "/body-scan.mp3")}>
          Body Scan <span>▶ 5 MIN</span>
        </button>
        <button className="w-full py-3 bg-white shadow rounded flex justify-between items-center px-4" onClick={() => handlePlay("Making Happiness", "/making-happiness.mp3")}>
          Making Happiness <span>▶ 3 MIN</span>
        </button>
      </div>
    </div>
  );
};

export default MeditationScreen;

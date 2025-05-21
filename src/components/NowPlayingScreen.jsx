import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const NowPlayingScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  
  const { 
    title = "Now Playing", 
    audioSrc = "/Body-Sound-Meditation.mp3"  
  } = location.state || {};

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);  
  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current) return;

    const audio = audioRef.current;

    
    const handleLoadedMetadata = () => setDuration(audio.duration || 0);
    
    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleError = () => console.error("Playback error: Unable to load file", audioSrc);

    
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("error", handleError);

    
    return () => {
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("error", handleError);
    };
  }, [audioSrc]);

  const togglePlayPause = () => {
    if (!audioRef.current) return;

    const audio = audioRef.current;

    
    if (isPlaying) {
      
      audio.pause();
    } else {
      
      audio.play().catch((err) => {
        
        console.error("Playback error:", err);
      });
    }

    setIsPlaying(!isPlaying);
  };

  const skipTime = (seconds) => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.min(
        Math.max(audioRef.current.currentTime + seconds, 0),
        duration
      );
    }
  };


  const [isLiked, setIsLiked] = useState(false); 
  const toggleLike = () => {
    setIsLiked(!isLiked); 
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-[#1F265E] text-center text-white">
      {/* Close Button */}
      <button className="absolute top-4 left-4 text-gray-300 text-2xl" onClick={() => navigate(-1)}>
        ✕
      </button>

      {/* Title */}
      <h2 className="text-2xl font-bold text-white">{title}</h2>
      <p className="text-sm text-gray-300 font-semibold">7 days of calm</p>

      {/* Audio Element */}
      <audio ref={audioRef} preload="metadata">
        <source src={audioSrc} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Controls */}
      <div className="mt-8 flex items-center justify-center space-x-6">
        <button onClick={() => skipTime(-15)} className="text-gray-200 text-xl">↺ 15</button>
        <button
          className="bg-gray-800 text-white p-4 rounded-full text-xl"
          onClick={togglePlayPause}
        >
          {isPlaying ? "❚❚" : "▶"}
        </button>
        <button onClick={() => skipTime(15)} className="text-gray-200 text-xl">15 ↻</button>
      </div>

      {/* Progress Bar */}
      <div className="w-3/4 mt-4">
        <input
          type="range"
          min="0"
          max={duration}
          value={currentTime}
          onChange={(e) => (audioRef.current.currentTime = e.target.value)}
          className="w-full"
        />
        <div className="flex justify-between text-sm text-gray-300">
          <span>{new Date(currentTime * 1000).toISOString().substring(14, 19)}</span>
          <span>{new Date(duration * 1000).toISOString().substring(14, 19)}</span>
        </div>
      </div>

      {/* Download Button */}
      <div className="absolute top-4 right-4 flex space-x-4">
        {/* Heart Button */}
        <button 
          onClick={toggleLike} 
          className={`text-3xl ${isLiked ? 'text-blue-400' : 'text-gray-300'}`}
        >
          ♡
        </button>
        <a href={audioSrc} download="MeditationTrack.mp3">
          <button className="text-gray-300 text-2xl">⬇</button>
        </a>
      </div>
    </div>
  );
};

export default NowPlayingScreen;

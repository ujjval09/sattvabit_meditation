import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import Home from "./components/Home";
import Reminder from "./components/Reminders";
import Welcome from "./components/Welcome";
import Topics from "./components/Topics";
import CourseDetails from "./components/CourseDetails";
import Meditate from "./components/ourproject";
import MusicPlayer from "./components/MusicPlayer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} /> {/* Default page: Sign Up */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/set-reminder" element={<Reminder />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/choose-topic" element={<Topics />} />
        <Route path="/course-details" element={<CourseDetails />} />
        <Route path="/meditate" element={<Meditate />} />
        <Route path="/music-player" element={<MusicPlayer />} />
      </Routes>
    </Router>
  );
}

export default App;

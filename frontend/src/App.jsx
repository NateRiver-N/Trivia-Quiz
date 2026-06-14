import React from 'react'
import { Home } from "./pages/home"
import { Routes, Route } from "react-router-dom";
import { Leaderboard } from "./pages/leaderboard";
import { Profile } from './pages/profile';
import { Match } from './pages/match';
import { Quiz } from './pages/quiz';


const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/match" element={<Match />} />
      <Route path="/quiz/:category" element={<Quiz/>} />

    </Routes>
    </>
  )
}

export default App

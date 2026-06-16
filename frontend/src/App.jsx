import React, { useEffect } from 'react'
import { SignedIn , SignedOut , SignInButton ,RedirectToSignIn,useUser } from "@clerk/clerk-react";
import { Home } from "./pages/home"
import { Routes, Route } from "react-router-dom";
import { Leaderboard } from "./pages/leaderboard";
import { Profile } from './pages/profile';
import { Match } from './pages/match';
import { Quiz } from './pages/quiz';
import { Landing } from './pages/landing';
import { Review } from "./pages/review";

const App = () => {

  const { user } = useUser();
  useEffect(() => {

  if (!user) return;

  fetch(
    "http://localhost:8000/users/create",
    {
      method: "POST",

      headers: {
        "Content-Type":
        "application/json"
      },

      body: JSON.stringify({
        clerkId: user.id,
        username:
          user.fullName,
        email:
          user.primaryEmailAddress
          .emailAddress,
        xp: 0,
        gamesPlayed: 0,
          "wins": 0,
  "currentStreak": 0,
      })
    }
  );

}, [user]);

  return (
    <>
    <SignedOut>
      <Landing/>
    </SignedOut>

    <SignedIn>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/match" element={<Match />} />
      <Route path="/quiz/:category" element={<Quiz/>} />
      <Route path="/review" element={<Review />}/>
    </Routes>
    </SignedIn>
    </>
  )
}

export default App

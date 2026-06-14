import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Navbar } from "../components/navbar";


export const Home = () => {

     const navigate = useNavigate();


    const [menuOpen,setMenuOpen]=useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
        <Navbar/>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-16 md:py-24 px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          Test Your Knowledge
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl">
          Compete with players worldwide, climb the leaderboard,
          earn XP, unlock achievements, and become the ultimate
          Trivia Champion.
        </p>

        <button onClick={() => navigate("/match")} className="mt-8 bg-yellow-400 text-black font-bold px-6 md:px-8 py-3 md:py-4 rounded-xl hover:scale-105 transition">
          Start Playing
        </button>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-10">
        <div className="bg-slate-900 rounded-2xl p-6">
          <h3 className="text-slate-400">Global Rank</h3>
          <p className="text-3xl md:text-4xl font-bold mt-2">
            #12
          </p>
        </div>

        <div className="bg-slate-900 rounded-2xl p-6">
          <h3 className="text-slate-400">XP Points</h3>
          <p className="text-3xl md:text-4xl font-bold mt-2">
            2450
          </p>
        </div>

        <div className="bg-slate-900 rounded-2xl p-6 sm:col-span-2 lg:col-span-1">
          <h3 className="text-slate-400">Current Streak</h3>
          <p className="text-3xl md:text-4xl font-bold mt-2">
            🔥 7 Days
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="px-4 md:px-10 mt-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Categories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-900 p-6 md:p-8 rounded-2xl hover:bg-yellow-400 hover:text-black transition cursor-pointer">
            <h3 className="text-xl md:text-2xl font-bold">
              Football
            </h3>
          </div>

          <div className="bg-slate-900 p-6 md:p-8 rounded-2xl hover:bg-yellow-400 hover:text-black transition cursor-pointer">
            <h3 className="text-xl md:text-2xl font-bold">
              General Knowledge
            </h3>
          </div>
        </div>
      </section>

      {/* Leaderboard */}
      <section className="px-4 md:px-10 mt-16 pb-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Top Players
        </h2>

        <div className="bg-slate-900 rounded-2xl p-4 md:p-6">
          <div className="flex justify-between py-3 border-b border-slate-700 text-sm md:text-base">
            <span>🥇 Rahul</span>
            <span>5400 XP</span>
          </div>

          <div className="flex justify-between py-3 border-b border-slate-700 text-sm md:text-base">
            <span>🥈 Priya</span>
            <span>5100 XP</span>
          </div>

          <div className="flex justify-between py-3 text-sm md:text-base">
            <span>🥉 Ayaan</span>
            <span>4800 XP</span>
          </div>
        </div>
      </section>
    </div>
  );
};
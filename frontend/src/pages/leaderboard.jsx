import React from "react";
import { Navbar } from "../components/navbar";

export const Leaderboard = () => {
  const players = [
    { rank: 1, name: "Rahul", xp: 5400 },
    { rank: 2, name: "Priya", xp: 5100 },
    { rank: 3, name: "Ayaan", xp: 4800 },
    { rank: 4, name: "Arjun", xp: 4500 },
    { rank: 5, name: "Neha", xp: 4200 },
    { rank: 6, name: "Rohan", xp: 4000 },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white px-4 md:px-10 ">
    <Navbar/>
      
      {/* Heading */}
      <div className="text-center mb-12 py-10">
        <h1 className="text-4xl md:text-5xl font-bold">
          🏆 Leaderboard
        </h1>

        <p className="text-slate-400 mt-3">
          Compete with players around the world
        </p>
      </div>

      {/* Current User */}
      <div className="bg-yellow-400 text-black rounded-2xl p-6 mb-10">
        <h2 className="font-bold text-2xl">
          Your Ranking
        </h2>

        <div className="flex justify-between mt-4">
          <span>#3 Ayaan</span>
          <span>4800 XP</span>
        </div>
      </div>

      {/* Top 3 Podium */}
      <div className="flex justify-center items-end gap-4 mb-12">
        {/* 2nd */}
        <div className="bg-slate-800 rounded-t-2xl p-6 w-24 md:w-32 text-center">
          <div className="text-3xl">🥈</div>
          <p className="font-bold mt-2">Priya</p>
          <p className="text-sm text-slate-400">
            5100 XP
          </p>
        </div>

        {/* 1st */}
        <div className="bg-yellow-400 text-black rounded-t-2xl p-8 w-28 md:w-40 text-center">
          <div className="text-4xl">🥇</div>
          <p className="font-bold mt-2">Rahul</p>
          <p className="text-sm">
            5400 XP
          </p>
        </div>

        {/* 3rd */}
        <div className="bg-slate-800 rounded-t-2xl p-5 w-24 md:w-32 text-center">
          <div className="text-3xl">🥉</div>
          <p className="font-bold mt-2">Ayaan</p>
          <p className="text-sm text-slate-400">
            4800 XP
          </p>
        </div>
      </div>

      {/* Search */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search player..."
          className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 outline-none"
        />
      </div>

      {/* Rankings Table */}
      <div className="bg-slate-900 rounded-2xl overflow-hidden">
        <div className="grid grid-cols-3 bg-slate-800 p-4 font-bold">
          <div>Rank</div>
          <div>Player</div>
          <div className="text-right">XP</div>
        </div>

        {players.map((player) => (
          <div
            key={player.rank}
            className="grid grid-cols-3 p-4 border-b border-slate-800 hover:bg-slate-800 transition"
          >
            <div>#{player.rank}</div>
            <div>{player.name}</div>
            <div className="text-right">
              {player.xp}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
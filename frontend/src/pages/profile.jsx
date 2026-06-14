import React from "react";
import { Navbar } from "../components/navbar";

export const Profile = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white px-4 md:px-10 ">
      <Navbar/>
      
      {/* Profile Header */}
      <div className="bg-slate-900 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-6 mt-10">
        <img
          src="https://ui-avatars.com/api/?name=Ayaan&background=facc15&color=000"
          alt="profile"
          className="w-28 h-28 rounded-full"
        />

        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold">
            Ayaan Shaikh
          </h1>

          <p className="text-slate-400 mt-1">
            Trivia Enthusiast
          </p>

          <div className="mt-3 flex flex-wrap gap-3 justify-center md:justify-start">
            <span className="bg-yellow-400 text-black px-3 py-1 rounded-full font-semibold">
              Rank #12
            </span>

            <span className="bg-slate-800 px-3 py-1 rounded-full">
              2450 XP
            </span>
          </div>
        </div>
      </div>

      {/* Stats */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        <div className="bg-slate-900 rounded-2xl p-6">
          <h3 className="text-slate-400">Games Played</h3>
          <p className="text-3xl font-bold mt-2">127</p>
        </div>

        <div className="bg-slate-900 rounded-2xl p-6">
          <h3 className="text-slate-400">Wins</h3>
          <p className="text-3xl font-bold mt-2">89</p>
        </div>

        <div className="bg-slate-900 rounded-2xl p-6">
          <h3 className="text-slate-400">Accuracy</h3>
          <p className="text-3xl font-bold mt-2">84%</p>
        </div>

        <div className="bg-slate-900 rounded-2xl p-6">
          <h3 className="text-slate-400">Current Streak</h3>
          <p className="text-3xl font-bold mt-2">🔥 7</p>
        </div>
      </section>

      {/* Achievements */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-6">
          Achievements
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-slate-900 rounded-2xl p-6 text-center">
            <div className="text-5xl">🏆</div>
            <p className="mt-3 font-semibold">
              Champion
            </p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-6 text-center">
            <div className="text-5xl">🔥</div>
            <p className="mt-3 font-semibold">
              7 Day Streak
            </p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-6 text-center">
            <div className="text-5xl">🎯</div>
            <p className="mt-3 font-semibold">
              Accuracy Master
            </p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-6 text-center">
            <div className="text-5xl">⭐</div>
            <p className="mt-3 font-semibold">
              Top 20 Player
            </p>
          </div>
        </div>
      </section>

      {/* Recent Activity */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-6">
          Recent Activity
        </h2>

        <div className="bg-slate-900 rounded-2xl p-6">
          <div className="border-b border-slate-800 py-3">
            🏆 Won Football Quiz (+50 XP)
          </div>

          <div className="border-b border-slate-800 py-3">
            🎯 Scored 9/10 in GK Quiz
          </div>

          <div className="py-3">
            🔥 Maintained 7-Day Streak
          </div>
        </div>
      </section>
    </div>
  );
};
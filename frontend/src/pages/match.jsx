import React from "react";
import { useNavigate } from "react-router-dom";

export const Match = () => {
  const navigate = useNavigate();

  const startQuiz = (category) => {

  localStorage.removeItem("quiz_answers");
  localStorage.removeItem("quiz_current");
  localStorage.removeItem("quiz_timer");
  localStorage.removeItem("quiz_finished");
  localStorage.removeItem("quiz_questions");
  localStorage.removeItem("quiz_score");
  localStorage.removeItem("quiz_review");

  navigate(`/quiz/${category}`);
};

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-4">
      <div className="w-full max-w-4xl">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold">
            🎮 Start a Match
          </h1>

          <p className="text-slate-400 mt-4">
            Choose a category and challenge yourself.
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div
            onClick={() => startQuiz("Football")}
            className="bg-slate-900 p-8 rounded-3xl cursor-pointer hover:bg-yellow-400 hover:text-black transition duration-300"
          >
            <h2 className="text-3xl font-bold">
              ⚽ Football
            </h2>

            <p className="mt-4">
              Test your football knowledge from leagues,
              players and world cups.
            </p>
          </div>

          <div
            onClick={() => startQuiz("gk")}
            className="bg-slate-900 p-8 rounded-3xl cursor-pointer hover:bg-yellow-400 hover:text-black transition duration-300"
          >
            <h2 className="text-3xl font-bold">
              🧠 General Knowledge
            </h2>

            <p className="mt-4">
              History, science, geography and much more.
            </p>
          </div>

        </div>

        {/* User Stats */}
        <div className="mt-12 bg-slate-900 rounded-3xl p-6">
          <h2 className="text-2xl font-bold mb-4">
            Your Stats
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className="text-slate-400">Rank</p>
              <p className="text-xl font-bold">#12</p>
            </div>

            <div>
              <p className="text-slate-400">XP</p>
              <p className="text-xl font-bold">2450</p>
            </div>

            <div>
              <p className="text-slate-400">Wins</p>
              <p className="text-xl font-bold">89</p>
            </div>

            <div>
              <p className="text-slate-400">Streak</p>
              <p className="text-xl font-bold">🔥 7</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
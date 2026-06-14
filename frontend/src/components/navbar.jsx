// src/components/Navbar.jsx

import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="border-b border-slate-800 bg-slate-950 text-white sticky top-0 z-50">
      <div className="flex items-center justify-between px-5 md:px-10 py-5">
        <h1
          className="text-3xl font-extrabold text-yellow-400 cursor-pointer"
          onClick={() => navigate("/")}
        >
          TRIVIA
        </h1>

        {/* Desktop */}
        <div className="hidden md:flex gap-8 text-lg font-medium">
          <button onClick={() => navigate("/")}>
            Home
          </button>

          <button onClick={() => navigate("/leaderboard")}>
            Leaderboard
          </button>

          <button onClick={() => navigate("/profile")}>
            Profile
          </button>
        </div>

        {/* Mobile */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-60" : "max-h-0"
        }`}
      >
        <div className="bg-slate-900">
          <button
            onClick={() => {
              navigate("/");
              setMenuOpen(false);
            }}
            className="block w-full text-left px-5 py-4"
          >
            Home
          </button>

          <button
            onClick={() => {
              navigate("/leaderboard");
              setMenuOpen(false);
            }}
            className="block w-full text-left px-5 py-4"
          >
            Leaderboard
          </button>

          <button
            onClick={() => {
              navigate("/profile");
              setMenuOpen(false);
            }}
            className="block w-full text-left px-5 py-4"
          >
            Profile
          </button>
        </div>
      </div>
    </nav>
  );
};
import { SignInButton, SignUpButton } from "@clerk/clerk-react";

export const Landing = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 md:px-12 py-5 border-b border-slate-800">
        <h1 className="text-3xl font-extrabold text-yellow-400">
          TRIVIA
        </h1>

        <div className="flex gap-4">
          <SignInButton mode="modal">
            <button className="px-5 py-2 border border-slate-700 rounded-lg hover:border-yellow-400">
              Login
            </button>
          </SignInButton>

          <SignUpButton mode="modal">
            <button className="px-5 py-2 bg-yellow-400 text-black rounded-lg font-semibold">
              Sign Up
            </button>
          </SignUpButton>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center px-6 py-24">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Challenge Your
          <span className="text-yellow-400"> Knowledge</span>
        </h1>

        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          Play trivia quizzes, earn XP, climb the leaderboard,
          and compete with players around the world.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
          <SignUpButton mode="modal">
            <button className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold">
              Play Now
            </button>
          </SignUpButton>

          <SignInButton mode="modal">
            <button className="border border-slate-700 px-8 py-4 rounded-xl">
              Login
            </button>
          </SignInButton>
        </div>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-6 px-6 md:px-12">
        <div className="bg-slate-900 p-6 rounded-2xl">
          <h3 className="text-2xl mb-2">🏆 Rankings</h3>
          <p className="text-slate-400">
            Compete globally and become the #1 player.
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl">
          <h3 className="text-2xl mb-2">⚡ Earn XP</h3>
          <p className="text-slate-400">
            Gain points and unlock achievements.
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl">
          <h3 className="text-2xl mb-2">🎯 Daily Challenges</h3>
          <p className="text-slate-400">
            New questions every day.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="px-6 md:px-12 py-20">
        <h2 className="text-3xl font-bold mb-8">
          Popular Categories
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-slate-900 p-6 rounded-xl">⚽ Football</div>
          <div className="bg-slate-900 p-6 rounded-xl">🌍 General Knowledge</div>
          <div className="bg-slate-900 p-6 rounded-xl">🔬 Science</div>
          <div className="bg-slate-900 p-6 rounded-xl">📜 History</div>
        </div>
      </section>

      {/* Leaderboard Preview */}
      <section className="px-6 md:px-12">
        <h2 className="text-3xl font-bold mb-6">
          Top Players
        </h2>

        <div className="bg-slate-900 rounded-2xl p-6">
          <div className="flex justify-between py-3 border-b border-slate-700">
            <span>🥇 Rahul</span>
            <span>5400 XP</span>
          </div>

          <div className="flex justify-between py-3 border-b border-slate-700">
            <span>🥈 Priya</span>
            <span>5100 XP</span>
          </div>

          <div className="flex justify-between py-3">
            <span>🥉 Ayaan</span>
            <span>4800 XP</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-24 px-6">
        <h2 className="text-4xl font-bold mb-4">
          Ready To Become #1?
        </h2>

        <p className="text-slate-400 mb-8">
          Join thousands of players and start earning XP today.
        </p>

        <SignUpButton mode="modal">
          <button className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold">
            Create Free Account
          </button>
        </SignUpButton>
      </section>
    </div>
  );
};
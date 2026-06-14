import React, { useState } from "react";

export const Quiz = () => {
  const question = {
    category: "Football",
    question:
      "Which country won the FIFA World Cup in 2022?",
    options: [
      "France",
      "Argentina",
      "Brazil",
      "Germany",
    ],
  };

  const [selected, setSelected] = useState("");

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-slate-900 rounded-3xl p-8">

        {/* Top Section */}
        <div className="flex justify-between items-center mb-6">
          <span className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold">
            Football
          </span>

          <span className="text-xl font-bold">
            ⏱ 20s
          </span>
        </div>

        {/* Progress */}
        <div className="w-full bg-slate-700 rounded-full h-3 mb-8">
          <div className="bg-yellow-400 h-3 rounded-full w-[20%]"></div>
        </div>

        <p className="text-slate-400 mb-2">
          Question 1 / 5
        </p>

        {/* Question */}
        <h1 className="text-3xl font-bold mb-8">
          {question.question}
        </h1>

        {/* Options */}
        <div className="space-y-4">
          {question.options.map((option) => (
            <button
              key={option}
              onClick={() => setSelected(option)}
              className={`w-full text-left p-5 rounded-xl border transition
              ${
                selected === option
                  ? "bg-yellow-400 text-black border-yellow-400"
                  : "bg-slate-800 border-slate-700 hover:bg-slate-700"
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        {/* Next Button */}
        <div className="mt-8 flex justify-end">
          <button
            className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold"
          >
            Next →
          </button>
        </div>

      </div>
    </div>
  );
};
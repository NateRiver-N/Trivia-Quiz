import React from "react";
import { useNavigate } from "react-router-dom";

export const Review = () => {

  const navigate = useNavigate();


const goHome = () => {

  localStorage.removeItem("quiz_answers");
  localStorage.removeItem("quiz_current");
  localStorage.removeItem("quiz_timer");
  localStorage.removeItem("quiz_finished");
  localStorage.removeItem("quiz_questions");
  localStorage.removeItem("quiz_review");
  localStorage.removeItem("quiz_score");

  navigate("/");
};

  const reviewData = JSON.parse(
    localStorage.getItem("quiz_review")
  );

  if (!reviewData) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        No review data found.
      </div>
    );
  }

  const {
    questions,
    answers,
    category,
    score
  } = reviewData;

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">

      {/* Header */}
      <div className="max-w-5xl mx-auto mb-8">

        <h1 className="text-4xl font-bold text-yellow-400">
          Quiz Review
        </h1>

        <p className="mt-2 text-slate-400">
          Category: {category}
        </p>

        <p className="mt-2 text-2xl font-bold">
          Score: {score}
        </p>

      </div>

      {/* Questions */}
      <div className="max-w-5xl mx-auto space-y-6">

        {questions.map((question, index) => {

          const userAnswer =
            answers[index];

          const isCorrect =
            userAnswer ===
            question.correctAnswer;

          return (
            <div
              key={index}
              className="bg-slate-900 rounded-2xl p-6"
            >
              <h2 className="text-xl font-bold mb-3">
                Question {index + 1}
              </h2>

              <p className="text-lg mb-5">
                {question.question}
              </p>

              <div className="space-y-3">

                {question.options.map(
                  (option) => (
                    <div
                      key={option}
                      className={`p-3 rounded-lg border
                      ${
                        option ===
                        question.correctAnswer
                          ? "bg-green-600 border-green-600"
                          : option === userAnswer
                          ? "bg-red-600 border-red-600"
                          : "bg-slate-800 border-slate-700"
                      }`}
                    >
                      {option}
                    </div>
                  )
                )}

              </div>

              <div className="mt-5">

                <p className="text-yellow-400">
                  Your Answer:
                  {" "}
                  {userAnswer ||
                    "Not Answered"}
                </p>

                <p className="text-green-400">
                  Correct Answer:
                  {" "}
                  {
                    question.correctAnswer
                  }
                </p>

                <p
                  className={`font-bold mt-2 ${
                    isCorrect
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {isCorrect
                    ? "✓ Correct"
                    : "✗ Incorrect"}
                </p>

              </div>

            </div>
          );
        })}

      </div>

      {/* Buttons */}
      <div className="max-w-5xl mx-auto flex gap-4 mt-10">

        <button
          onClick={goHome}
          className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold"
        >
          Home
        </button>

      </div>

    </div>
  );
};
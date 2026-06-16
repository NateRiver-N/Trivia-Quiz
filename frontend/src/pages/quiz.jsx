import React, { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";


export const Quiz = () => {
  const navigate = useNavigate();

  const goToReview = () => {

  navigate("/review", {
    state: {
      questions,
      answers,
      category
    }
  });

};

  const { user } = useUser();

  const { category } = useParams();

const [questions, setQuestions] = useState(() => {

  const saved =
    localStorage.getItem(
      "quiz_questions"
    );

  return saved
    ? JSON.parse(saved)
    : [];

});

  const [score,setScore] = useState(0);

const [quizFinished, setQuizFinished] =
useState(
  localStorage.getItem("quiz_finished")
  === "true"
);


 const [submitting, setSubmitting] = useState(false);

const [answers, setAnswers] = useState(() => {
  return JSON.parse(
    localStorage.getItem("quiz_answers")
  ) || {};
});

const [currentQuestion, setCurrentQuestion] =
useState(() => {
  return Number(
    localStorage.getItem("quiz_current")
  ) || 0;
});

const [timeLeft, setTimeLeft] = useState(() => {
  return Number(
    localStorage.getItem("quiz_timer")
  ) || 300;
});

//local Storages 
useEffect(() => {
  localStorage.setItem(
    "quiz_answers",
    JSON.stringify(answers)
  );

  localStorage.setItem(
    "quiz_current",
    currentQuestion
  );

  localStorage.setItem(
    "quiz_timer",
    timeLeft
  );

  localStorage.setItem(
    "quiz_finished",
    quizFinished
  );

}, [
  answers,
  currentQuestion,
  timeLeft,
  quizFinished
]);


 useEffect(() => {

  const savedQuestions =
    localStorage.getItem(
      "quiz_questions"
    );

  if (savedQuestions) {
    return;
  }

  fetch(
    `http://localhost:8000/questions/${category}`
  )
  .then(res => res.json())
  .then(data => {

    setQuestions(data);

    localStorage.setItem(
      "quiz_questions",
      JSON.stringify(data)
    );

  });

}, [category]);

useEffect(() => {

  if (timeLeft <= 0) {
    handleSubmit();
    return;
  }

  const timer = setInterval(() => {
    setTimeLeft(prev => prev - 1);
  }, 1000);

  return () => clearInterval(timer);

}, [timeLeft]);

const minutes =
Math.floor(timeLeft / 60);

const seconds =
timeLeft % 60;

const handleNext = () => {

  if(currentQuestion < questions.length - 1){

      setCurrentQuestion(
        prev => prev + 1
      );

  }

};

const handlePrevious = () => {

  if(currentQuestion > 0){

     setCurrentQuestion(
       prev => prev - 1
     );

  }

};

const handleSelect = (option) => {

  setAnswers(prev => ({
    ...prev,
    [currentQuestion]: option
  }));

};

const handleSubmit = async () => {

 if(submitting) return;

 setSubmitting(true);

 let totalScore = 0;

 questions.forEach((question,index)=>{

   if(
      answers[index] ===
      question.correctAnswer
   ){

      totalScore += 10;

   }

 });

 setScore(totalScore);
setQuizFinished(true);

await fetch(
  "http://localhost:8000/users/submit",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      clerkId: user.id,
      score: totalScore
    })
  }
);
};
 
const progress =
((currentQuestion + 1)
/
questions.length) * 100;

if (questions.length === 0) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
      Loading Questions...
    </div>
  );
}

  const question = questions[currentQuestion];
  

if (quizFinished) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
      <div className="bg-slate-900 p-10 rounded-3xl text-center">

        <h1 className="text-4xl font-bold">
          Quiz Completed
        </h1>

        <p className="mt-4 text-2xl">
          Score: {score}
        </p>

        <button
          onClick={() => {

            localStorage.removeItem(
              "quiz_answers"
            );

            localStorage.removeItem(
              "quiz_current"
            );

            localStorage.removeItem(
              "quiz_timer"
            );

            localStorage.removeItem(
              "quiz_finished"
            );

            localStorage.removeItem(
  "quiz_questions"
);

            navigate("/");
          }}
          className="mt-6 bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold"
        >
          Back To Home
        </button>
          <button onClick={goToReview}
           className="mt-6 bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold"
        >
          Review Answers
        </button>

      </div>
    </div>
  );
}

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-4">
      
      <div className="w-full max-w-3xl bg-slate-900 rounded-3xl p-8">

        {/* Top Section */}
        <div className="flex justify-between items-center mb-6">
          <span className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold">
            {question?.category}
          </span>

         <span
className={`text-xl font-bold ${
  timeLeft <= 60
    ? "text-red-500"
    : ""
}`}
>
 ⏱ {minutes}:
 {seconds.toString().padStart(2,"0")}
</span>
        </div>

        {/* Progress */}
        <div className="w-full bg-slate-700 rounded-full h-3 mb-8">
          <div
className="bg-yellow-400 h-3 rounded-full"
style={{
 width: `${progress}%`
}}
></div>
        </div>

        <p className="text-slate-400 mb-2">
          Question {currentQuestion+1} / {questions.length}
        </p>

        {/* Question */}
<div className="flex gap-2 mb-6 flex-wrap">

{questions.map((_, index) => (

<button
key={index}
onClick={() => setCurrentQuestion(index)}
className={`w-10 h-10 rounded-full font-bold
 ${
   currentQuestion === index
   ? "bg-yellow-400 text-black"
   : answers[index]
   ? "bg-green-500"
   : "bg-slate-700"
 }`}
>
 {index + 1}
</button>

))}

</div>

        <h1 className="text-3xl font-bold mb-8">
          {question?.question}
        </h1>

        {/* Options */}
        
        <div className="space-y-4">
          
          {question?.options?.map((option) => (
            <button
              key={option}
              onClick={() => handleSelect(option)}
              className={`w-full text-left p-5 rounded-xl border transition
              ${
                answers[currentQuestion] === option
                  ? "bg-yellow-400 text-black border-yellow-400"
                  : "bg-slate-800 border-slate-700 hover:bg-slate-700"
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        {/* Next Button */}
        <div className="mt-8 flex justify-between">
          <button  onClick={ handlePrevious}
            className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold"
          >
            Previous
          </button>

          <button  onClick={() => handleSubmit()}
            className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold"
          >
            Submit 
          </button>

          <button  onClick={handleNext}
            className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold"
          >
            Next 
          </button>
        </div>

      </div>
    </div>
  );
};
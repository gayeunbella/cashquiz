import React, { useState } from 'react';

const quizQuestions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris"
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: ["Charles Dickens", "Leo Tolstoy", "William Shakespeare", "Mark Twain"],
    answer: "William Shakespeare"
  },
  {
    question: "What is the largest planet in our Solar System?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Jupiter"
  }
];

function Popup({ score, closePopup }) {
  return (
    <div className="popup">
      <h4>{score * 10} points</h4>
      <h1>Hello</h1>
      <button onClick={closePopup}>Close</button>
    </div>
  );
}

function QuizPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedOption === quizQuestions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    setSelectedOption('');
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowScore(true);
    }
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div>
      {showScore ? (
        <div>
          <h2>Your score is {score} out of {quizQuestions.length}</h2>
        </div>
      ) : (
        <div>
            <button onClick={togglePopup}>{score * 10} points</button>
            {showPopup && <Popup score={score} closePopup={togglePopup} />}
            <h2>{quizQuestions[currentQuestionIndex].question}</h2>
            <form onSubmit={handleSubmit}>
                {quizQuestions[currentQuestionIndex].options.map((option, index) => (
                <div key={index}>
                    <label>
                    <input
                        type="radio"
                        value={option}
                        checked={selectedOption === option}
                        onChange={handleOptionChange}
                    />
                    {option}
                    </label>
                </div>
                ))}
                <button type="submit">Submit</button>
            </form>
            </div>
        )}
        </div>
  );
}

export default QuizPage;

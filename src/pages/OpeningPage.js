import React from 'react';

function OpeningPage({ startQuiz }) {
  return (
    <div>
      <img src = "/favicon.png"></img>
      <h1 id = "CashQuizLabel">Cash Quiz</h1>
      <button onClick={startQuiz}>Start Quiz!</button>
    </div>
  );
}

export default OpeningPage;
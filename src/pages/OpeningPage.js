import React from 'react';

function OpeningPage({ startQuiz }) {
  return (
    <div>
      <h1>Cash Quiz</h1>
      <button onClick={startQuiz}>Start quiz!</button>
    </div>
  );
}

export default OpeningPage;
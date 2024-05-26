import './App.css';
import { useState } from 'react';
import OpeningPage from './pages/OpeningPage';
import QuizPage from './pages/QuizPage';

function App() {
  const [quizStarted, setQuizStarted] = useState(false);

  const startQuiz = () => {
    setQuizStarted(true);
  };

  return (
    <div className="App">
      {quizStarted? (<QuizPage/>) : (<OpeningPage startQuiz={startQuiz}/>)}
    </div>
  );
}

// // src/App.js
// import React, { useState, useEffect } from 'react';
// import Popup from './Popup';
// import './App.css';

// const App = () => {
//   const [round, setRound] = useState(1);
//   const [points, setPoints] = useState(100);
//   const [isPopupOpen, setIsPopupOpen] = useState(false);

//   useEffect(() => {
//     if (round > 1) {
//       setIsPopupOpen(true);
//     }
//   }, [round]);

//   const handleNextRound = () => {
//     setRound(round + 1);
//   };

//   const handleBuyProduct = () => {
//     // Implement product buying logic here
//     if (points >= 50) {
//       setPoints(points - 50);
//       alert('Product bought!');
//     } else {
//       alert('Not enough points!');
//     }
//   };

//   const handleClosePopup = () => {
//     setIsPopupOpen(false);
//   };

//   return (
//     <div className="App">
//       <h1>Round {round}</h1>
//       <p>Points: {points}</p>
//       <button onClick={handleNextRound}>Next Round</button>
//       <Popup
//         isOpen={isPopupOpen}
//         onClose={handleClosePopup}
//         points={points}
//         onBuy={handleBuyProduct}
//       />
//     </div>
//   );
// };

// export default App;

export default App;
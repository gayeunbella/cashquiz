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

export default App;
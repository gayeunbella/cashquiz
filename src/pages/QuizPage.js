import React, { useState } from 'react';

const quizQuestions = [
  {
    question: "x^2 + 4x + 4 = 0. Find the value of x. ",
    options: ["1", "2", "-1", "-2"],
    answer: "-2",
    solution: "The factored form of the equation is (x + 2)^2.\nOnly -2 can make the equation true.\nTherefore the answer is -2."
    }, 
    {
    question: "x^2 + 6x + 9 = 0. Find the value of x. ",
    options: ["2", "3", "-2", "-3"],
    answer: "-3",
    solution: "The factored form of the equation is (x + 3)^2.\nOnly -3 can make the equation true.\nTherefore the answer is -3."
    }, 
    {
    question: "x^2 + 8x + 16 = 0. Find the value of x. ",
    options: ["3", "4", "-3", "-4"],
    answer: "-4",
    solution: "The factored form of the equation is (x + 4)^2.\nOnly -4 can make the equation true.\nTherefore the answer is -4."
    }, 
    {
    question: "x^2 - 4x + 4 = 0. Find the value of x. ",
    options: ["1", "2", "-1", "-2"],
    answer: "2",
    solution: "The factored form of the equation is (x - 2)^2. Only 2 can make the equation true.\nTherefore the answer is 2. "
    }, 
    {
    question: "x^2 + 10x + 25 = 0. Find the value of x. ",
    options: ["4", "5", "-5", "-6"],
    answer: "-5",
    solution: "The factored form of the equation is (x + 5)^2. Only -5 can make the equation true.\nTherefore the answer is -5 . "
    }, 
    {
    question: "x^2 - 14x + 49 = 0. Find the value of x. ",
    options: ["6", "7", "8", "9"],
    answer: "7",
    solution: "The factored form of the equation is (x - 7)^2. Only 7 can make the equation true.\nTherefore the answer is 7. "
    }, 
    {
    question: "x^2 - 20x + 100 = 0. Find the value of x. ",
    options: ["10", "-10", "11", "-12"],
    answer: "10",
    solution: "The factored form of the equation is (x - 10)^2. Only 10 can make the equation true.\nTherefore the answer is 10. "
    }, 
    {
    question: "x^2 + 30x + 225 = 0. Find the value of x. ",
    options: ["15", "30", "-15", "-30"],
    answer: "-15",
    solution: "The factored form of the equation is (x + 15)^2. Only -15 can make the equation true.\nTherefore the answer is -15 . "
    }    
];

function Popup({ point, closePopup, updatePoints }) {
  const [showPurchased, setShowPurchased] = useState(false);
  const [showPurchaseError, setShowPurchaseError] = useState(false);

  const purchaseStarbucks = () => {
    if (point >= 1000) {
      updatePoints(point - 1000);
      setShowPurchaseError(false);
      setShowPurchased(true);
    }
    else {
      setShowPurchaseError(true);
      setShowPurchased(false);
    }
  }

  const purchaseXbox = () => {
    if (point >= 2000) {
      updatePoints(point - 2000);
      setShowPurchaseError(false);
      setShowPurchased(true);
    }
    else {
      setShowPurchaseError(true);
      setShowPurchased(false);
    }
  }

  const purchaseAmazon = () => {
    if (point >= 6000) {
      updatePoints(point - 6000);
      setShowPurchaseError(false);
      setShowPurchased(true);
    }
    else {
      setShowPurchaseError(true);
      setShowPurchased(false);
    }
  }

  return (
    <div className="popup">
      <div id = "pointsToRedeem">{point} points</div>
      <button onClick={purchaseStarbucks}>
        <table>
          <tr>
            <th><img class = "giftcardImg" src = "https://az15297.vo.msecnd.net/images/rewards/rc/medium/000805000005_262x164.png"></img></th>
          </tr>
          <tr>
            <td>$5 Starbucks Gift Card</td>
          </tr>
          <tr>
            <td>1000 points</td>
          </tr>
        </table>
      </button>
      
      <button onClick={purchaseXbox}>
        <table>
          <tr>
            <th><img class = "giftcardImg" src = "https://az15297.vo.msecnd.net/images/rewards/rc/medium/000400000008v1_262x164.png"></img></th>
          </tr>
          <tr>
            <td>$10 Xbox Gift Card</td>
          </tr>
          <tr>
            <td>2000 points</td>
          </tr>
        </table>
      </button>

      <button onClick={purchaseAmazon}>
        <table>
          <tr>
            <th><img class = "giftcardImg" src = "https://az15297.vo.msecnd.net/images/rewards/rc/medium/000800000000_262x164.png"></img></th>
          </tr>
          <tr>
            <td>$30 Amazon Gift Card</td>
          </tr>
          <tr>
            <td>6000 points</td>
          </tr>
        </table>
      </button>

      {showPurchased && <p>Successfully purchased the giftcard. The gift card will be emailed to you.</p>}
      {showPurchaseError && <p>You need more points for this gift card. Purchase failed.</p>}
      
      <button onClick={closePopup}>Close</button>
    </div>
  );
}

function Explanation({toNextQuestion, solution}) {
  const [CurrentQuestionIndex] = useState();

  return (
      <div>
          <button onClick={toNextQuestion}>Continue</button>
          <p>Wrong!</p>
          <p>{solution}</p>
      </div>
  )
}

function QuizPage() {
const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
const [selectedOption, setSelectedOption] = useState('');
const [score, setScore] = useState(1000);
const [point, setPoint] = useState(10000);
const [showScore, setShowScore] = useState(false);
const [showPopup, setShowPopup] = useState(false);
const [showExplanation, setShowExplanation] = useState(false);

const handleOptionChange = (e) => {
  setSelectedOption(e.target.value);
};

const handleSubmit = (e) => {
  e.preventDefault();
  if (selectedOption === quizQuestions[currentQuestionIndex].answer) {
    setScore(score + 1);
    setPoint(point + 10);
    setShowExplanation(false);
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowScore(true);
    }
  }
  else {
    setPoint(point - 2);
    setShowExplanation(true);
  }
};

const togglePopup = () => {
  setShowPopup(!showPopup);
};

const toNextQuestion = () => {
  setShowExplanation(false);
  if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowScore(true);
    }
}

return (
  <div>
    {showScore ? (
      <div>
        <button onClick={togglePopup}>Store ({point} points)</button>
        {showPopup && <Popup point={point} closePopup={togglePopup} />}
        <h2>Your score is {score} out of {quizQuestions.length}</h2>
      </div>
    ) : (
      <div>
          <button onClick={togglePopup}>Store ({point} points)</button>
          {showPopup && <Popup updatePoints={(newPoint) => setPoint(newPoint)} point={point} closePopup={togglePopup} />}
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
              {!showExplanation && <button type="submit">Submit</button>}
              {showExplanation && <Explanation toNextQuestion={toNextQuestion} solution = {quizQuestions[currentQuestionIndex].solution}/>}
          </form>
          </div>
      )}
      </div>
);
}

export default QuizPage;
import { useState } from 'react';

function ScoreBoard() {
  const [score, setScore] = useState(0);

  const increment = () => {
    setScore((prevScore) => prevScore + 1);
  };

  const plusFive = () => {
    setScore((prevScore) => prevScore + 5);
  };

  return (
    <div className="scoreboard-container">
      <h2>{score}</h2>
      <button onClick={increment}>+1 Points</button>
      <button onClick={plusFive}>+5 Points</button>
    </div>
  );
}

export default ScoreBoard;
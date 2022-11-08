import React, { useContext } from "react";
import { QuizContext } from "../Helpers/Context";
import { Questions } from "../Helpers/QuestionBank";

export default function Endscreen() {
  const { score, setScore, setGameState } = useContext(QuizContext);
  function restart() {
    setGameState("menu");
    setScore(0);
  }
  const result = `${score}/${Questions.length}`;
  return (
    <div className="endscreen">
      <h1> Quiz Score</h1>
      <h1 className="score">{result}</h1>
      <button onClick={restart}>Restart Quiz</button>
    </div>
  );
}

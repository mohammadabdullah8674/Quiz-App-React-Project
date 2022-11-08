import React, { useContext, useState } from "react";
import { QuizContext } from "../Helpers/Context";
import { Questions } from "../Helpers/QuestionBank";

export default function Quiz() {
  const [currentQuestion, setQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  const { score, setScore, setGameState } = useContext(QuizContext);
  function NextQuestion() {
    if (optionChosen === Questions[currentQuestion].answer) {
      setScore((prevScore) => prevScore + 1);
    }
    setQuestion((prevQuestion) => prevQuestion + 1);
  }
  function finishQuiz() {
    if (optionChosen === Questions[currentQuestion].answer) {
      setScore((prevScore) => prevScore + 1);
    }
    setGameState("endscreen");
    console.log(score);
  }
  return (
    <div className="quiz">
      <h1>{Questions[currentQuestion].prompt}</h1>
      <div className="options">
        <button onClick={() => setOptionChosen("A")}>
          {Questions[currentQuestion].optionA}
        </button>
        <button onClick={() => setOptionChosen("B")}>
          {Questions[currentQuestion].optionB}
        </button>
        <button onClick={() => setOptionChosen("C")}>
          {Questions[currentQuestion].optionC}
        </button>
        <button onClick={() => setOptionChosen("D")}>
          {Questions[currentQuestion].optionD}
        </button>
        <div className="greenBtn">
          {currentQuestion === Questions.length - 1 ? (
            <button onClick={finishQuiz}>Finish Quiz</button>
          ) : (
            <button onClick={NextQuestion}>Next Question</button>
          )}
        </div>
      </div>
    </div>
  );
}

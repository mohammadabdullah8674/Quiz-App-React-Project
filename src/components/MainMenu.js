import React, { useContext } from "react";
import { QuizContext } from "../Helpers/Context";

export default function MainMenu() {
  const { setGameState } = useContext(QuizContext);
  return (
    <div className="menu">
      <button onClick={() => setGameState("quiz")}>Start Quiz</button>
      <p className="info">Made with ❤ by Mohd Abdullah</p>
    </div>
  );
}

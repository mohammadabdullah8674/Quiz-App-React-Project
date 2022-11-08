import { useState } from "react";
import Endscreen from "./components/Endscreen";
import MainMenu from "./components/MainMenu";
import Quiz from "./components/Quiz";
import { QuizContext } from "./Helpers/Context";
import "./styles.css";

export default function App() {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <QuizContext.Provider
        value={{ gameState, setGameState, score, setScore }}
      >
        {gameState === "menu" && <MainMenu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "endscreen" && <Endscreen />}
      </QuizContext.Provider>
    </div>
  );
}

import { useEffect, useState } from "react";
import anagramsDataObject from "../utils/anagramsData";
import WordLengthFrom from "./WordLengthForm";
import Game from "./Game";
import PlayAgainButton from "./PlayAgainButton";
import Results from "./Results";
import { getGameData } from "../utils/helpers";

const GameController = () => {
  // Local state variables
  const [userWordLengthInput, setUserWordLengthInput] = useState();
  const [
    hasUserInitialInputBeenSubmitted,
    setHasUserInitialInputBeenSubmitted,
  ] = useState(false);
  const [gameData, setGameData] = useState();
  const [userScore, setUserScore] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(10);

  // Set initial game data after user selects word length
  useEffect(() => {
    if (!userWordLengthInput) return;
    else {
      setGameData(getGameData(userWordLengthInput, anagramsDataObject));
    }
  }, [userWordLengthInput, setGameData]);

  useEffect(() => {
    if (!hasUserInitialInputBeenSubmitted) return;
    // Stop timer if no gameData (i.e., game has been won)
    else if (gameData) {
      // Run timer
      const interval = setInterval(() => {
        setTimeRemaining(timeRemaining - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  });

  // Render Logic
  const renderComponents = () => {
    if (!hasUserInitialInputBeenSubmitted) {
      return (
        <WordLengthFrom
          userWordLengthInput={userWordLengthInput}
          setUserWordLengthInput={setUserWordLengthInput}
          setHasUserInitialInputBeenSubmitted={
            setHasUserInitialInputBeenSubmitted
          }
        />
      );
    } else if (
      hasUserInitialInputBeenSubmitted &&
      gameData &&
      timeRemaining > 0
    ) {
      return (
        <Game
          userWordLengthInput={userWordLengthInput}
          gameData={gameData}
          setGameData={setGameData}
          userScore={userScore}
          setUserScore={setUserScore}
          timeRemaining={timeRemaining}
        />
      );
    } else if (!gameData && timeRemaining > 0) {
      return (
        <div className="text-center">
          <div className="fs-1 mb-5">You won!</div>
          <PlayAgainButton />
        </div>
      );
    } else {
      return (
        <>
          <Results userScore={userScore} />
          <PlayAgainButton />
        </>
      );
    }
  };

  return <>{renderComponents()}</>;
};

export default GameController;

import { useEffect, useState } from "react";
import anagramsDataObject from "../utils/anagramsData";
import WordLengthFrom from "./WordLengthForm";
import Game from "./Game";
import CongratsMessage from "./CongratsMessage";
import PlayAgainButton from "./PlayAgainButton";

const GameController = () => {
  // State variables
  const [userWordLengthInput, setUserWordLengthInput] = useState();

  const [
    hasUserInitialInputBeenSubmitted,
    setHasUserInitialInputBeenSubmitted,
  ] = useState(false);

  const [gameData, setGameData] = useState();

  const [userScore, setUserScore] = useState(0);

  // Game Logic
  useEffect(() => {
    if (!userWordLengthInput) return;
    else {
      const anagramsArrayByWordLengthKey =
        anagramsDataObject[userWordLengthInput];

      const anagramsArrayForGame =
        anagramsArrayByWordLengthKey[
          Math.floor(Math.random() * anagramsArrayByWordLengthKey.length)
        ];

      const wordSelectedForGame =
        anagramsArrayForGame[
          Math.floor(Math.random() * anagramsArrayForGame.length)
        ];

      const indexOfSelectedWord =
        anagramsArrayForGame.indexOf(wordSelectedForGame);

      anagramsArrayForGame.splice(indexOfSelectedWord, 1);

      setGameData({
        selectedWord: wordSelectedForGame,
        answerArray: anagramsArrayForGame,
      });
    }
  }, [userWordLengthInput]);

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
      gameData.answerArray.length > 0
    ) {
      return (
        <Game
          gameData={gameData}
          setGameData={setGameData}
          userScore={userScore}
          setUserScore={setUserScore}
        />
      );
    } else {
      return (
        <>
          <CongratsMessage />
          <PlayAgainButton
            setHasUserInitialInputBeenSubmitted={
              setHasUserInitialInputBeenSubmitted
            }
            setUserWordLengthInput={setUserWordLengthInput}
            setUserScore={setUserScore}
          />
        </>
      );
    }
  };

  return <>{renderComponents()}</>;
};

export default GameController;

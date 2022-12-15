import { useEffect, useState } from "react";
import anagramsDataObject from "../utils/anagramsData";
import WordLengthFrom from "./WordLengthForm";
import Game from "./Game";

const GameController = () => {
  // State variables
  const [userWordLengthInput, setUserWordLengthInput] = useState();

  const [
    hasUserWordLengthInputBeenSubmitted,
    setHasUserWordLengthInputBeenSubmitted,
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
    if (!hasUserWordLengthInputBeenSubmitted) {
      return (
        <WordLengthFrom
          userWordLengthInput={userWordLengthInput}
          setUserWordLengthInput={setUserWordLengthInput}
          setHasUserWordLengthInputBeenSubmitted={
            setHasUserWordLengthInputBeenSubmitted
          }
        />
      );
    } else {
      return (
        <Game
          gameData={gameData}
          setGameData={setGameData}
          userScore={userScore}
          setUserScore={setUserScore}
        />
      );
    }
  };

  return <>{renderComponents()}</>;
};

export default GameController;

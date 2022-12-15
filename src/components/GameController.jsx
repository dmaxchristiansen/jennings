import { useState } from "react";
import anagramsData from "../utils/anagramsData";
import WordLengthFrom from "./WordLengthForm";
import Game from "./Game";

const GameController = () => {
  const [userWordLengthInput, setUserWordLengthInput] = useState();
  const [
    hasUserWordLengthInputBeenSubmitted,
    setHasUserWordLengthInputBeenSubmitted,
  ] = useState(false);

  const getRandomWord = () => {
    if (!hasUserWordLengthInputBeenSubmitted) {
      return;
    } else {
      const anagramsArrayByWordLengthKey = anagramsData[userWordLengthInput];

      const randomAnagramsArrayWithinWordLengthKey =
        anagramsArrayByWordLengthKey[
          Math.floor(Math.random() * anagramsArrayByWordLengthKey.length)
        ];

      const randomWordWithinRandomArray =
        randomAnagramsArrayWithinWordLengthKey[
          Math.floor(
            Math.random() * randomAnagramsArrayWithinWordLengthKey.length,
          )
        ];

      return randomWordWithinRandomArray;
    }
  };

  return (
    <div>
      {!hasUserWordLengthInputBeenSubmitted ? (
        <WordLengthFrom
          setUserWordLengthInput={setUserWordLengthInput}
          setHasUserWordLengthInputBeenSubmitted={
            setHasUserWordLengthInputBeenSubmitted
          }
        />
      ) : (
        <Game word={getRandomWord()} />
      )}
    </div>
  );
};

export default GameController;

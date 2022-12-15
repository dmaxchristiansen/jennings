import React from "react";
import anagramsData from "../helpers/Constant";

function Anagrams(props) {
  const anagramsGroupByWordLength = anagramsData[props.wordLength];
  const anagramsArray =
    anagramsGroupByWordLength[
      Math.floor(Math.random() * anagramsGroupByWordLength.length)
    ];
  const randomAnagramWord =
    anagramsArray[Math.floor(Math.random() * anagramsArray.length)];

  const indexOfRandomWord = anagramsArray.indexOf(randomAnagramWord);
  anagramsArray.splice(indexOfRandomWord, 1);

  // user enters a guess
  // anagramsArray.indexOf(guess) == -1
  // if false, remove guess from anagramsArray
  // if true, show user that they are incorrect

  return (
    <div>
      {randomAnagramWord}
      <span> ({anagramsArray.length} left)</span>
    </div>
  );
}

export default Anagrams;

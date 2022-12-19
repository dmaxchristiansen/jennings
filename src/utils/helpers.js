export const getGameData = (userWordLengthInput, anagramsDataObject) => {
  // Filter-out anagram arrays that are empty
  // Anagram arrays will be empty if user has guess all answers
  const listOfAnagramsArraysByWordLengthKey = anagramsDataObject[
    userWordLengthInput
  ].filter(el => el.length);
  // Terminate function if all anagram arrays are empty
  // (i.e., the user has won the game)
  if (!listOfAnagramsArraysByWordLengthKey.length) {
    return;
  }
  // Select random array from length group
  const anagramsArrayForGame =
    listOfAnagramsArraysByWordLengthKey[
      Math.floor(Math.random() * listOfAnagramsArraysByWordLengthKey.length)
    ];
  // Select random word for game from randomly selected array
  const wordSelectedForGame =
    anagramsArrayForGame[
      Math.floor(Math.random() * anagramsArrayForGame.length)
    ];
  // Get index of selected word in the array
  const indexOfSelectedWord = anagramsArrayForGame.indexOf(wordSelectedForGame);
  // Remove selected word from array
  anagramsArrayForGame.splice(indexOfSelectedWord, 1);
  // Instantiate object to pass to game data setter function
  const gameData = {
    selectedWord: wordSelectedForGame,
    answerArray: anagramsArrayForGame,
  };
  return gameData;
};

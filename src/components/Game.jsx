import { useState } from "react";
import anagramsDataObject from "../utils/anagramsData";
import { getGameData } from "../utils/helpers";

const Game = ({
  userWordLengthInput,
  gameData,
  setGameData,
  userScore,
  setUserScore,
  timeRemaining,
}) => {
  // REMOVE THIS CONSOLE LOG BEFORE SUBMISSION!
  console.log(gameData);

  // Destructure gameData into variables
  const { selectedWord, answerArray } = gameData;

  // Instantiate state var to hold list of correct user answers
  const [userAnswerList] = useState([]);

  const handleSubmit = e => {
    // Prevent default submission behavior and page refresh
    e.preventDefault();
    // Instantiate variable to hold user input
    const userInput = document.answerForm.answerInput.value;
    // If user input is one of the answers in answerArray...
    if (answerArray.includes(userInput)) {
      // Remove answer from answerArray
      answerArray.splice(answerArray.indexOf(userInput), 1);
      // Add answer to list of correct user answers
      userAnswerList.push(userInput);
      // If more correct answers remain in answerArray...
      if (answerArray.length > 0) {
        // Update gameData accordingly
        setGameData({
          ...gameData,
        });
      }
      // If user has guessed all of the answers in answerArray...
      else {
        // Get new random anagrams array of same word length
        // and update gameData
        setGameData(getGameData(userWordLengthInput, anagramsDataObject));
      }
      // Add one point to userScore
      setUserScore((userScore += 1));
    }
    // Reset the form
    document.answerForm.reset();
  };

  return (
    <div className="container">
      <div
        className="
          row 
          justify-content-between 
          mb-1
          border-bottom 
          border-dark
          fs-5 
          fw-bold 
        "
      >
        <div className="col">Score: {userScore}</div>
        <div className="col text-end">
          Time Left:
          <span style={{ display: "inline-block", width: 30 }}>
            {timeRemaining}
          </span>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-12 mx-auto text-center fs-2">
          {selectedWord}
          {`(${gameData.answerArray.length} left)`}
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-8 mx-auto fs-2">
          <form name="answerForm" onSubmit={e => handleSubmit(e)}>
            <input
              name="answerInput"
              type="text"
              className="form-control text-center"
              placeholder="type here"
            />
          </form>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 mx-auto text-center">
          <ol>
            {userAnswerList.map(answer => (
              <li key={answer}>{answer}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Game;

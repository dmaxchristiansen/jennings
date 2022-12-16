const Game = ({ gameData, setGameData, userScore, setUserScore, timeRemaining }) => {
  // Remove this console log before submission !!!
  console.log(gameData);

  const { selectedWord, answerArray } = gameData;

  const handleSubmit = e => {
    e.preventDefault();

    const userInput = document.answerForm.answerInput.value;

    if (answerArray.includes(userInput)) {
      answerArray.splice(answerArray.indexOf(userInput), 1);

      setGameData({
        ...gameData,
        answerArray: answerArray,
      });

      setUserScore((userScore += 1));
    }

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
          <span style={{display: "inline-block", width: 30}}>

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
      <div className="row">
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
    </div>
  );
};

export default Game;

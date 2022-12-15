const Game = ({ word }) => {
  const placeholderScore = 1;
  const placeholderTimeRemaining = 18;
  const placeholderGuessCount = 2;

  return (
    <div className="container">
      <div
        className="row justify-content-between fs-5 fw-bold border-bottom border-dark mb-1"
      >
        <div className="col">Score: {placeholderScore}</div>
        <div className="col text-end">
          Time Left: {placeholderTimeRemaining}
        </div>
      </div>
      <div className="row">
        <div className="col-12 mx-auto text-center fs-2 mb-3">
          {word}
          {`(${placeholderGuessCount} left)`}
        </div>
      </div>
    </div>
  );
};

export default Game;

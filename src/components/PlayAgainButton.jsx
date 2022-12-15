const PlayAgainButton = ({
  setHasUserInitialInputBeenSubmitted,
  setUserWordLengthInput,
  setUserScore,
}) => (
  <div className="d-grid">
    <button
      className="btn btn-primary"
      onClick={() => {
        setHasUserInitialInputBeenSubmitted(false);
        setUserWordLengthInput();
        setUserScore(0);
      }}
    >
      Play Again
    </button>
  </div>
);

export default PlayAgainButton;

const PlayAgainButton = () => (
  <div className="d-grid">
    <button
      className="btn btn-primary"
      // Refresh the page to reset gameData
      onClick={() => window.location.reload()}
    >
      Play Again
    </button>
  </div>
);

export default PlayAgainButton;

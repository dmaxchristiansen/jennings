const Results = ({ userScore }) => (
  <div className="container text-center">
    <div className="fs-1">Time's Up!</div>
    <div className="fs-3 fw-bold mb-2">You Got</div>
    <div style={{ fontSize: 80 }}>{userScore}</div>
    <div className="fs-3 fw-bold mb-3">Anagrams</div>
  </div>
);

export default Results;

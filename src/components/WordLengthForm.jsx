const WordLengthForm = ({
  userWordLengthInput,
  setUserWordLengthInput,
  setHasUserInitialInputBeenSubmitted,
}) => (
  <form>
    <div className="row mb-3">
      <label htmlFor="wordLengthInput" className="col-6 col-form-label fw-bold">
        WORD LENGTH
      </label>
      <div className="col-6">
        <select
          id="wordLengthInput"
          className="form-control form-select"
          defaultValue=""
          onChange={e => setUserWordLengthInput(e.target.value)}
        >
          <option disabled hidden value="">
            Select an option...
          </option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
        </select>
      </div>
    </div>
    <ol>
      <li>Choose Word Length</li>
      <li>
        Press&nbsp;<span className="fw-bold">Play!</span>
      </li>
      <li>How many anagrams can you find in a minute?</li>
    </ol>
    <div className="d-grid">
      <button
        className="btn btn-primary"
        onClick={() => setHasUserInitialInputBeenSubmitted(true)}
        disabled={!userWordLengthInput}
      >
        Play!
      </button>
    </div>
  </form>
);

export default WordLengthForm;

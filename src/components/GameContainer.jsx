const GameContainer = ({ children }) => (
  <div className="container ">
    <div className="row ">
      <div
        className="
          col
          mx-auto 
          p-3 
          border 
          border-1 
          border-dark 
          rounded 
          bg-light
        "
        style={{ minHeight: 500, maxWidth: 500 }}
      >
        <h1 className="text-center mb-3">Anagram Hunt</h1>
        {children}
      </div>
    </div>
  </div>
);

export default GameContainer;

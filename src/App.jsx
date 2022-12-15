import "./App.css";
import GameContainer from "./components/GameContainer";
import GameController from "./components/GameController";

const App = () => (
  <main className="main">
    <GameContainer>
      <GameController />
    </GameContainer>
  </main>
);

export default App;

import "./App.css";
import Data from "./components/Data";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="container">
        <h1> Tennis App </h1>
        <Data />
      </header>
    </div>
  );
}

export default App;

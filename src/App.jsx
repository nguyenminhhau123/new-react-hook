import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav.jsx";

function App() {
  let name = "minh hau";
  let obj = {
    name: "hau",
    study: "react js hook",
  };
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          minh hau code react js with {name} hoc {obj.study}
        </h2>
      </header>
    </div>
  );
}

export default App;

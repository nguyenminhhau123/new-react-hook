import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav.jsx";
import { useState } from "react";

function App() {
  // state
  let [name, setName] = useState("hau");
  let [address, setAddress] = useState("");

  // handle Function
  let handleOnClick = (event) => {
    setName(address);
    console.log("address set name", address);
  };
  let handleOnchange = (event) => {
    setAddress(event.target.value);
  };

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>minh hau code react js hook {name}</h2>
        <input
          type="text"
          value={address}
          onChange={(event) => {
            handleOnchange(event);
          }}
        />
        <button
          onClick={(event) => {
            handleOnClick(event);
          }}
        >
          click me
        </button>
      </header>
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav.jsx";
import { useState } from "react";

function App() {
  // state
  let [name, setName] = useState("hau");
  let [address, setAddress] = useState("");
  let [todos, setTodos] = useState([
    { id: "todo1", name: "hau", title: "javascript" },
    { id: "todo2", name: "hau", title: "java" },
  ]);

  // handle Function
  let handleOnClick = (event) => {
    if (!address) {
      alert("emtpy input");
      return;
    }
    // setName(address);
    // console.log("address set name", address);
    let newTodo = { id: "abc", title: address };
    // spread syntax array is
    setTodos([...todos, newTodo]);
    setAddress("");
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
        <div className="todo__container">
          {todos.map((todo) => {
            return <li key={todo.id}>{todo.title} </li>;
          })}
        </div>
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

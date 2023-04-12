import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Navigation/Nav";
import Todo from "./views/TodoList/Todo";
import { useState } from "react";
import { type } from "@testing-library/user-event/dist/type";

function App() {
  // // state
  // let [name, setName] = useState("hau");
  let [address, setAddress] = useState("");
  let [todos, setTodos] = useState([
    { id: "todo1", name: "hau", title: "javascript", type: "hau" },
    { id: "todo1", name: "hau", title: "typeScript", type: "hau" },
    { id: "todo2", name: "hau", title: "java", type: "minh nguyen" },
    { id: "todo2", name: "hau", title: "php", type: "minh nguyen" },
    { id: "todo2", name: "hau", title: "ruby", type: "minh nguyen" },
  ]);

  // handle Function
  let handleOnClick = (event) => {
    if (!address) {
      alert("emtpy input");
      return;
    }
    // setName(address);
    // console.log("address set name", address);
    let newTodo = {
      id: Math.floor(Math.random() * 10000) + 1,
      title: address,
      type: "hau",
    };
    // spread syntax array is
    setTodos([...todos, newTodo]);
    setAddress("");
  };
  let handleOnchange = (event) => {
    setAddress(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        <h2>minh hau code react js hook </h2>
        <Todo todos={todos} title={"todolist"} />

        <Todo
          todos={todos.filter((item) => item.type === "hau")}
          title={"todo hau"}
        />

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

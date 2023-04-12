import React from "react";

function Todo(props) {
  const todos = props.todos;
  return (
    <div>
      <div className="todo__container">
        <div className="title">{props.title}</div>
        {todos.map((todo) => {
          return (
            <>
              <li key={todo.id}>{todo.title} </li>
            </>
          );
        })}
      </div>
      <hr />
    </div>
  );
}

export default Todo;

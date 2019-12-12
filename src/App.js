import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

function App(props) {
  return (
    <div className="App">
      <div className="Todo-App">
        <TodoForm />
        <TodoList todos={props.todos}/>
      </div>
    </div>
  );
}

export default App;

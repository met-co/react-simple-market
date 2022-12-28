import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import InputForm from "./components/input-form/InputForm";
import TodoList from "./components/todo-list/TodoList";

function App() {
  /* Properties */

  const [todos, setTodos] = useState([]);

  /* Output */

  return (
    <div className="App">
      <Header />
      <InputForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;

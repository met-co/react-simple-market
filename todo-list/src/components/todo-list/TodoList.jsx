import React from "react";
import Todo from "../todo/Todo";
import "./style.css";

function TodoList({ todos, setTodos }) {
  /* Handlers */

  const deleteTodoHandler = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const updateTodoStateHandler = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone: !todo.isDone };
      }

      return todo;
    });

    setTodos(newTodos);
  };

  /* Output */

  return (
    <div className="todo-list-container">
      <div>
        <p className="todo-list-container__title">Working..🚀</p>
        <div className="todo-list-container__working">
          {todos
            .filter((todo) => !todo.isDone)
            .map((todo) => (
              <Todo
                key={todo.id}
                todo={todo}
                deleteTodoHandler={deleteTodoHandler}
                updateTodoStateHandler={updateTodoStateHandler}
              />
            ))}
        </div>
      </div>
      <div>
        <p className="todo-list-container__title">Done! 👍🏻</p>
        <div className="todo-list-container__done">
          {todos
            .filter((todo) => todo.isDone)
            .map((todo) => (
              <Todo
                key={todo.id}
                todo={todo}
                deleteTodoHandler={deleteTodoHandler}
                updateTodoStateHandler={updateTodoStateHandler}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default TodoList;

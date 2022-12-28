import React from "react";
import "./style.css";

function Todo({ todo, deleteTodoHandler, updateTodoStateHandler }) {
  /* Output */

  return (
    <div className="todo-container">
      <p className="todo-container__title">{todo.title}</p>
      <p className="todo-container__content">{todo.content}</p>

      <div className="todo-container__btn-group">
        <button
          className="todo-container__btn-group__delete"
          onClick={() => deleteTodoHandler(todo.id)}
        >
          삭제
        </button>
        <button
          className="todo-container__btn-group__updateState"
          onClick={() => updateTodoStateHandler(todo.id)}
        >
          {todo.isDone ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
}

export default Todo;

import React from "react";
import { useState } from "react";
import "./style.css";

function InputForm({ todos, setTodos }) {
  /* Properties */

  const initData = { id: 0, title: "", content: "", isDone: false };
  const [todo, setTodo] = useState(initData);

  /* Handlers */

  const onChangeInputHandler = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  const onAddHandler = () => {
    if (todo.title === "" || todo.content === "") {
      return;
    }

    const newTodo = { ...todo, id: todos.length };
    setTodos([...todos, newTodo]);

    init();
  };

  /* Helper methods */

  function init() {
    setTodo(initData);
  }

  /* Output */

  return (
    <div className="input-form__container">
      <div>
        <label className="input-form__container__label">제목</label>
        <input
          type="text"
          className="input-form__container__input"
          name="title"
          value={todo.title}
          onChange={onChangeInputHandler}
        />
        <label className="input-form__container__label">내용</label>
        <input
          type="text"
          className="input-form__container__input"
          name="content"
          value={todo.content}
          onChange={onChangeInputHandler}
        />
      </div>

      <button className="input-form__btn" onClick={onAddHandler}>
        추가하기
      </button>
    </div>
  );
}

export default InputForm;

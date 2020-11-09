import React, { useState } from "react";
import "../styles.css";
import ToDoItem from "./ToDoItem";

export default function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  function inputHandler(event) {
    const { value } = event.target;
    setText(value);
    event.preventDefault();
  }
  function addList() {
    setList((prevState) => {
      return [...prevState, text];
    });
    setText("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input value={text} onChange={inputHandler} type="text" />
        <button onClick={addList}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {list.map((elem) => {
            return <ToDoItem text={elem} />;
          })}
        </ul>
      </div>
    </div>
  );
}

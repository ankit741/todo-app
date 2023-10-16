import React, { useState } from "react";
import "./TodoForm.css";

const TodoForm = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);

  const addItem = (event, data) => {
    if (inputData) {
      const task = {
        key: Math.random(),
        data: data,
      };
      setItems([...items, task]);
      setInputData("");
    }
    event.preventDefault();
  };

  const removeItem = (key) => {
    const newItems = items.filter((item) => item.key !== key);
    setItems(newItems);
  };

  return (
    <div className="main-div">

      <div className="form">
      <h1>My To-Do List</h1>
        <form>
          <input
            className="input"
            value={inputData}
            placeholder="Add Task"
            onChange={(e) => setInputData(e.target.value)}
          />
          <button
            className="add-button"
            type="submit"
            onClick={(e) => addItem(e, inputData)}
          >
            Add
          </button>
        </form>
      </div>
      <div className="show-items">
        <ul>
          {items.map((item) => (
            <li className="item" key={item.key}>
              {item.data}
              <button className="remove-button" onClick={() => removeItem(item.key)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoForm;

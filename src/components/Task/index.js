import React from "react";
import "./styles.css";

const Task = ({ title, onDelTask }) => {
  return (
    <li className="taskWrapper">
      <p className="taskWrapper__text">{title}</p>
      <button
        className="taskWrapper__delete"
        type="button"
        onClick={() => onDelTask()}
      >
        X
      </button>
    </li>
  );
};

export { Task };

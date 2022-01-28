import React from "react";
import "./styles.css";

const Task = ({ title }) => {
  return (
    <li className="taskWrapper">
      <p className="taskWrapper__text">{title}</p>
    </li>
  );
};

export { Task };

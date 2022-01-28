import React from "react";
import "./styles.css";

const Input = (props) => {
  return (
    <div className="inputWrapper">
      <input className="inputWrapper__input" {...props} />
    </div>
  );
};

export { Input };

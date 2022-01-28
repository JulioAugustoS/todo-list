import React from "react";
import "./styles.css";

const Button = ({ title, ...props }) => {
  return (
    <div className="buttonWrapper">
      <button className="buttonWrapper__button" {...props}>
        {title}
      </button>
    </div>
  );
};

export { Button };

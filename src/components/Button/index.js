import React from "react";

import { ButtonWrapper } from "./styles";

const Button = ({ title, ...props }) => {
  return (
    <ButtonWrapper>
      <button {...props}>{title}</button>
    </ButtonWrapper>
  );
};

export { Button };

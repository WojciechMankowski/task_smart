import React from "react";
import { ButtonProps } from "../types/Props";

const Button: React.FC<ButtonProps> = ({ className, onClick, content }) => (
  <button className={className} onClick={onClick}>
    {content}
  </button>
);

export default Button;

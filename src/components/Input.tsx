import React from "react";
import { InputProps } from "../types/Props";
const Input: React.FC<InputProps> = ({ type, className, name, value, onChange }) => {
  return <input type={type} className={className} name={name} value={value} onChange={onChange} />;
};

export default Input;

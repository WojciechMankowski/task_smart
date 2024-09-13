import React, { useState } from "react";
import { InputProps } from "../types/Props";
import { RootState } from "../redux/reducer/rootReducer";
import { useDispatch, useSelector } from "react-redux";
import User from "../types/User";

const Input: React.FC<InputProps> = ({ type, className, name, onChange, onClick }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  
  const users = useSelector((state: RootState) => state.users.filteredUsers);
  const suggestions = users.map((user: User) => user[name as keyof User]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    dispatch({ type: "UPDATE_INPUT", payload: { name, value: newValue } });
    onChange?.(e);
  };

  const handleSuggestionClick = (suggestion: string) => {
    onClick?.(suggestion, name);
    setValue(suggestion);
    setIsFocus(false);
  };

  return (
    <>
      <input
        type={type}
        className={className}
        name={name}
        onChange={handleChange}
        onFocus={() => setIsFocus(true)}
        value={value}
      />
      {isFocus && (
        <div className="shadow-lg">
          {suggestions.map((suggestion: string, index: number) => (
            <button
              key={index}
              className="w-full text-left p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSuggestionClick(String(suggestion))}
            >
              {suggestion}
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default Input;

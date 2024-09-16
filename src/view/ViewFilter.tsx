import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Label from "../components/Label";
import Input from "../components/Input";
import Button from "../components/Button";
import { filterUsers } from "../redux/action/actionApp";
import { RootState } from "../redux/reducer/rootReducer";
import { AppDispatch } from "../store/store";
import { FilteredProps } from "../types/Props";
import User from "../types/User";

const inputFields: Array<{ key: keyof User; label: string; type: string }> = [
  { key: "id", label: "ID", type: "text" },
  { key: "name", label: "Name", type: "text" },
  { key: "username", label: "Username", type: "text" },
  { key: "email", label: "Email", type: "email" },
  { key: "phone", label: "Phone", type: "tel" },
];

const ViewFilter: React.FC<FilteredProps> = ({ onFilterChange }) => {
  
  const dispatch = useDispatch<AppDispatch>();
  const filters = useSelector((state: RootState) => state.users.filters);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const newFilters = { ...filters, [name]: value };
    dispatch(filterUsers(newFilters));
    onFilterChange(name as keyof User, value);
  };
  const onClickOnSuggestion = (suggestion: string, targetName: string) => {
    const filter = { ...filters, [targetName]: suggestion };
    dispatch(filterUsers(filter));
    onFilterChange(targetName as keyof User, suggestion);
  };
  const handleReset = () => {
    window.location.reload();
  };

  return (
    <div className="container mx-auto my-10 max-w-4xl p-6 shadow-2xl rounded-md border border-gray-300">
      <h2 className="text-2xl font-bold mb-6 text-center">Search for User</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {inputFields.map(({ key, label, type }) => (
          <div key={key}>
            <Label
              className="block text-sm font-semibold mb-2 text-gray-600"
              content={label}
              htmlFor={key}
            />
            <Input
              type={type}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
              name={key}
              value={filters[key] || ""}
              onChange={handleChange}
              onClick={onClickOnSuggestion}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-6">
        <Button
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300"
          onClick={handleReset}
          content="Clear and Refresh"
        />
      </div>
    </div>
  );
};

export default ViewFilter;

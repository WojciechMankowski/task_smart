import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Label from "../components/Label";
import Input from "../components/Input";
import Button from "../components/Button";
import {
  filterUsers,
  resetFilters,
  fetchUsers,
} from "../redux/action/actionApp";
import { RootState } from "../redux/reducer/rootReducer";
import { AppDispatch } from "../store/store";
import { FilteredProps } from "../types/Props";

const ViewFilter: React.FC<FilteredProps> = ({ onFilterChange }) => {
  const dispatch = useDispatch<AppDispatch>();
  const searchTerm = useSelector((state: RootState) => state.users.filters);

  const handleSearch = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.KeyboardEvent<HTMLInputElement>
  ) => {
    const target = event.target as HTMLInputElement;
    const newSearchTerm = {
      ...searchTerm,
      [target.name]: target.value,
    };
    dispatch(filterUsers(newSearchTerm));
    onFilterChange(target.name, target.value);
  };

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    if (event.key === "Backspace" || event.key === "Delete") {
      const newSearchTerm = { ...searchTerm, [target.name]: "" };
      dispatch(filterUsers(newSearchTerm));
      onFilterChange(target.name, "");
    }
  };

  const handleReset = () => {
    dispatch(resetFilters());
    dispatch(fetchUsers());
    onFilterChange("", "");
  };

  return (
    <div className="container mx-auto mt-6 max-w-4xl p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold text-gray-700 mb-6 flex items-center justify-center">Search for user</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div>
          <Label
            className="block text-sm font-semibold mb-2 text-gray-600"
            content="Id"
            htmlFor="id"
          />
          <Input
            type="number"
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            name="id"
            value={searchTerm.id?.toString() || ""}
            onChange={handleSearch}
            onKeyUp={handleKeyUp}
          />
        </div>
        <div>
          <Label
            className="block text-sm font-semibold mb-2 text-gray-600"
            content="Name"
            htmlFor="name"
          />
          <Input
            type="text"
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            name="name"
            value={searchTerm.name || ""}
            onChange={handleSearch}
            onKeyUp={handleKeyUp}
          />
        </div>
        <div>
          <Label
            className="block text-sm font-semibold mb-2 text-gray-600"
            content="User name"
            htmlFor="username"
          />
          <Input
            type="text"
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            name="username"
            value={searchTerm.username || ""}
            onChange={handleSearch}
            onKeyUp={handleKeyUp}
          />
        </div>
        <div>
          <Label
            className="block text-sm font-semibold mb-2 text-gray-600"
            content="E-mail"
            htmlFor="email"
          />
          <Input
            type="email"
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            name="email"
            value={searchTerm.email || ""}
            onChange={handleSearch}
            onKeyUp={handleKeyUp}
          />
        </div>
        <div>
          <Label
            className="block text-sm font-semibold mb-2 text-gray-600"
            content="Phone"
            htmlFor="phone"
          />
          <Input
            type="tel"
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            name="phone"
            value={searchTerm.phone || ""}
            onChange={handleSearch}
            onKeyUp={handleKeyUp}
          />
        </div>
      </div>
      <div className="flex justify-end mt-6">
        <Button
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300"
          onClick={handleReset}
          content="Wyczyść i odśwież"
        />
      </div>
    </div>
  );
};

export default ViewFilter;

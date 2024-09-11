import React from "react";
import { FilteredProps } from "../types/Props";
import Label from "../components/Label";
import Input from "../components/Input";

const ViewFilter: React.FC<FilteredProps> = ({ searchTerm, setSearchTerm }) => {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm({
      ...searchTerm,
      [event.target.name]: event.target.value,
      currentlyChangedField: event.target.name
    });
  };
  return (
    <div className=" mx-auto w-1/2 pt-4">
      <p> Search for user</p>
      <div className="flex flex-row ">
        <Label
          className="block text-sm font-bold w-3/12 "
          content="Id"
          htmlFor="id"
        />
        <Input
          type="number"
          className="shadow appearance-none border rounded 
        w-full py-2 px-3"
          name="id"
          value={searchTerm.id.toString()}
          placeholder="Enter Id"
          onChange={handleSearch}
        />
        <Label
          className="block text-sm font-bold w-3/12 "
          content="Full name"
          htmlFor="fullname"
        />
        <Input
          type="text"
          className="shadow appearance-none border rounded 
        w-full py-2 px-3"
          name="fullname"
          value={searchTerm.name}
          placeholder="Enter Full name"
          onChange={handleSearch}
        />
      </div>
      <div className="flex flex-row ">
        <Label
          className="block text-sm font-bold w-3/12 "
          content="User name"
          htmlFor="username"
        />
        <Input
          type="text"
          className="shadow appearance-none border rounded 
        w-full py-2 px-3"
          name="username"
          value={searchTerm.username}
          placeholder="Enter User name"
          onChange={handleSearch}
        />
        <Label
          className="block text-sm font-bold w-3/12 "
          content="E-mail"
          htmlFor="email"
        />
        <Input
          type="text"
          className="shadow appearance-none border rounded 
        w-full py-2 px-3"
          name="email"
          value={searchTerm.email}
          placeholder="EnterE-mail"
          onChange={handleSearch}
        />
        <Label
          className="block text-sm font-bold w-3/12 "
          content="Phone"
          htmlFor="phone"
        />
        <Input
          type="text"
          className="shadow appearance-none border rounded 
        w-full py-2 px-3"
          name="phone"
          value={searchTerm.phone}
          placeholder="Enter User name"
          onChange={handleSearch}
        />
      </div>
    </div>
  );
};

export default ViewFilter;

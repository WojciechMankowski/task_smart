import React from "react";
import { UsersProps } from "../types/Props";

const UserTable: React.FC<UsersProps> = ({ users }) => {
  const tableHeaders = ["ID", "Name", "Username", "Email", "Phone"];

  return (
    <div className="container mx-auto p-4 overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 min-w-full">
        <thead>
          <tr className="bg-blue-500 text-white">
            {tableHeaders.map((header) => (
              <th key={header} className="border p-2 whitespace-nowrap">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr
              key={user.id}
              className={`${
                index % 2 === 0 ? "bg-blue-300" : "bg-blue-500"
              } hover:bg-blue-200`}
            >
              {Object.values(user).map((value, cellIndex) => (
                <td key={cellIndex} className="border p-2 whitespace-nowrap">
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;

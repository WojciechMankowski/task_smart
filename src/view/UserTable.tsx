import React from "react";
import { UsersProps } from "../types/Props";
import UserRow from "../components/UserRow";

const UserTable: React.FC<UsersProps> = ({ users }) => {
   
      return (
        <div className="container mx-auto p-4">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 text-left">ID</th>
                <th className="py-2 px-4 text-left">Full name</th>
                <th className="py-2 px-4 text-left">User name</th>
                <th className="py-2 px-4 text-left">Email</th>
                <th className="py-2 px-4 text-left">Phone</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <UserRow key={user.id} user={user} />
              ))}
            </tbody>
          </table>
        </div>
      );
    };


export default UserTable;

import React from 'react';
import User from '../types/User';

const UserRow: React.FC<{user: User}> = ({ user }) => {
  return (
    <tr key={user.id} className="border-b hover:bg-gray-50">
      <td className="py-2 px-4">{user.id}</td>
      <td className="py-2 px-4">{user.name}</td>
      <td className="py-2 px-4">{user.username}</td>
      <td className="py-2 px-4">{user.email}</td>
      <td className="py-2 px-4">{user.phone}</td>
    </tr>
  );
};

export default UserRow;
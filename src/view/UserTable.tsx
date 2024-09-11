import { UsersProps } from "../types/Props";

const UserTable: React.FC<UsersProps> = ({ users }) => {
  return (
    <div className="container mx-auto p-4">
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Username</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Phone</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr
              key={user.id}
              className={`${
                index % 2 === 0 ? "bg-blue-300" : "bg-blue-500"
              } hover:bg-blue-200 `}
            >
              <td className="border p-2">{user.id}</td>
              <td className="border p-2">{user.name}</td>
              <td className="border p-2">{user.username}</td>
              <td className="border p-2">{user.email}</td>
              <td className="border p-2">{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;

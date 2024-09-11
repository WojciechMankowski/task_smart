import User from "../types/User";

const connectAPI = async (): Promise<User[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const userData = await response.json();
  const Users: User[] = userData.map((user: User) => ({
    id: user.id,
    name: user.name,
    username: user.username,
    email: user.email,
    phone: user.phone,
  }));

  return Users;
};
export default connectAPI;

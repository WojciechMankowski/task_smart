import User from "../types/User";

const connectAPI = async (): Promise<User[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const userData = await response.json();
  
  return userData.map(({ id, name, username, email, phone }: User) => ({
    id,
    name,
    username,
    email,
    phone,
  }));
};

export default connectAPI;

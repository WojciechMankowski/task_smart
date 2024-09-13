import User from "../types/User";
import { Search } from "../types/Props";

const searchUsers = (users: User[], { currentlyChangedField, ...searchCriteria }: Search): User[] => {
  const searchFunctions: Record<keyof Omit<Search, 'currentlyChangedField'>, (user: User) => boolean> = {
    id: (user) => user.id === searchCriteria.id,
    name: (user) => user.name.includes(searchCriteria.name),
    username: (user) => user.username.includes(searchCriteria.username),
    email: (user) => user.email.includes(searchCriteria.email),
    phone: (user) => user.phone.includes(searchCriteria.phone),
  };

  const searchFunction = searchFunctions[currentlyChangedField as keyof typeof searchFunctions] || (() => true);
  return users.filter(searchFunction);
};

export default searchUsers;

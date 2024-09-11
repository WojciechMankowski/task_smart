import User from "../types/User";
import { Search } from "../types/Props";

const searchUsers = (users: User[], searchForm: Search): User[] => {
  const { currentlyChangedField, ...searchCriteria } = searchForm;

  return users.filter((user) => {
    switch (currentlyChangedField) {
      case "id":
        return user.id === searchCriteria.id;
      case "name":
        return user.name.includes(searchCriteria.name);
      case "username":
        return user.username.includes(searchCriteria.username);
      case "email":
        return user.email.includes(searchCriteria.email);
      case "phone":
        return user.phone.includes(searchCriteria.phone);
      default:
        return true; 
    }
  });
};

export default searchUsers;

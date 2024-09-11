import React, { useState, useEffect } from "react";
import connectAPI from "./helper/connect";
import UserTable from "./view/UserTable";
import User from "./types/User";
import ViewFilter from "./view/ViewFilter";
import "./assets/main.css";
import searchUsers from "./helper/searchUsers";

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState({
    id: 0,
    name: "",
    username: "",
    email: "",
    phone: "",
    currentlyChangedField: ""
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await connectAPI();
        setUsers(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const data = searchUsers(users, searchTerm)
    console.log(data)
    setUsers(data)
    
  }, [searchTerm]);

  return (
    <div className="">
      <ViewFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <UserTable users={users} />
    </div>
  );
};

export default App;

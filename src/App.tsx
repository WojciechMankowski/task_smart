import React, { useEffect, useState, useMemo} from "react";
import { useDispatch, useSelector } from "react-redux";
import UserTable from "./view/UserTable";
import { fetchUsers } from "./redux/action/actionApp";
import { RootState } from "./redux/reducer/rootReducer";
import { AppDispatch } from "./store/store";
import ViewFilter from "./view/ViewFilter";
import "./assets/main.css";
import User from "./types/User";

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, error, filteredUsers } = useSelector((state: RootState) => state.users);
  const [filters, setFilters] = useState<Partial<User>>({});

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleFilterChange = (field: keyof User, value: string) => {
    setFilters(prev => ({ ...prev, [field]: value }));
  };

  const filteredUserList = useMemo(() => 
    filteredUsers.filter(user =>
      Object.entries(filters).every(([key, value]) =>
        user[key as keyof User].toString().toLowerCase().includes((value || '').toLowerCase())
      )
    ), [filteredUsers, filters]
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error}</div>;

  return (
    <>
      <h2 className="text-4xl font-extrabold dark:text-white text-center p-8">
        Administration Panel - Users
      </h2>
      <ViewFilter onFilterChange={handleFilterChange} />
      <UserTable users={filteredUserList} />
    </>
  );
};

export default App;

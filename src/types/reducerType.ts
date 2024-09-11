import User from "./User";
import { Search } from "./Props";
export interface ActionType {
    type: string;
    payload:
      | { users: User[] }
      | { searchParams: Search; users: User[] }; 
  }
  
  export interface AppState {
    users: User[];
  }
  
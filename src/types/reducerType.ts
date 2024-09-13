import  User  from "./User";
import { Search } from "./Props";

export type ActionType =
  | { type: string; payload: User[] }
  | { type: string; payload: Search };

export interface AppState {
    users: User[];
    filteredUsers: User[];
    isLoading: boolean;
    error: string | null;
    filters: Search;
}

import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./reducerApp";

export const rootReducer = combineReducers({
  users: userReducer,
  // Tutaj możesz dodać inne reducery, jeśli są potrzebne
});

export type RootState = ReturnType<typeof rootReducer>;

import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import connectAPI from '../../helper/connect';
import { Search } from '../../types/Props';


export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async () => {
    const users = await connectAPI();
    return users;
  }
);

export const filterUsers = createAction<Search>('users/filter');

// Dodajemy nową akcję resetFilters
export const resetFilters = createAction('users/resetFilters');

// Dodajemy nową akcję do usuwania użytkownika
export const deleteUser = createAction<number>('users/deleteUser');



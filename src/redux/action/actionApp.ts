import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import connectAPI from '../../helper/connect';
import { Search } from '../../types/Props';


export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async () => await connectAPI()
);

export const filterUsers = createAction<Search>('users/filter');
export const resetFilters = createAction('users/resetFilters');





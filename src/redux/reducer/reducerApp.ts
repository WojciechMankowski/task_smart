import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import User from '../../types/User';
import { Search } from '../../types/Props';
import { fetchUsers, filterUsers, resetFilters } from '../action/actionApp';

interface UserState {
  users: User[];
  filteredUsers: User[];
  isLoading: boolean;
  error: string | null;
  filters: Search;
}

const initialState: UserState = {
  users: [],
  filteredUsers: [],
  isLoading: false,
  error: null,
  filters: {
    id: '',
    name: '',
    username: '',
    email: '',
    phone: '',
    currentlyChangedField: '',
  },
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchUsers.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
      state.isLoading = false;
      state.users = action.payload;
      state.filteredUsers = action.payload;
    })
    .addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || 'Wystąpił błąd podczas pobierania użytkowników';
    })
    .addCase(filterUsers, (state, action: PayloadAction<Search>) => {
      state.filters = action.payload;
      state.filteredUsers = state.users.filter((user) => 
        Object.entries(action.payload).every(([key, value]) => 
          key === 'currentlyChangedField' || 
          (value === '' || user[key as keyof User] .toString().toLowerCase().includes(value.toLowerCase()))
        )
      );
    })
    .addCase(resetFilters, (state) => {
      state.filters = initialState.filters;
      state.filteredUsers = state.users;
    });
});

export default userReducer;
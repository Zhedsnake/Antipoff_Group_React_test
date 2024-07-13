import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUsers } from '../../api/getUsers';

interface User {
  id: number;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface UsersState {
  users: User[];
  status: 'idle' | 'succeeded';
  currentPage: number,
}

const initialState: UsersState = {
  users: [],
  status: 'idle',
  currentPage: 1,
};

// Асинхронное действие для получения пользователей
export const getUsers = createAsyncThunk(
  'users/getUsers',
  async (page: number) => {
    const users = await fetchUsers(page);
    return users;
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload;
      });
  },
});

export default usersSlice.reducer;

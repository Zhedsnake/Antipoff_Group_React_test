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
}

const initialState: UsersState = {
  users: [],
  status: 'idle',
};

// Асинхронное действие для получения пользователей
export const getUsers = createAsyncThunk('users/getUsers', async () => {
  const users = await fetchUsers();
  return users;
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload;
      })
  },
});

export default usersSlice.reducer;

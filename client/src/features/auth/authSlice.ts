import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '../../api/config';

interface AuthState {
  isAuthenticated: boolean;
  user: { [key: string]: any } | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

export const logIn = createAsyncThunk(
  'auth/logIn',
  async ({ login, password }: { login: string; password: string }) => {
    const response = await axios.post(`${API_URL}/user/login`, { login, password });
    return response.data;
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async ({ login, password }: { login: string; password: string }) => {
    const response = await axios.post(`${API_URL}/user/register`, { login, password });
    return response.data;
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem('token');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(logIn.fulfilled, (state, action: PayloadAction<any>) => {
        state.isAuthenticated = true;
        state.user = action.payload.user;
        localStorage.setItem('token', action.payload.token);
      })
      .addCase(register.fulfilled, (state, action: PayloadAction<any>) => {
        state.isAuthenticated = true;
        state.user = action.payload.user;
        localStorage.setItem('token', action.payload.token);
      });
  },
});

export const { logOut } = authSlice.actions;
export default authSlice.reducer;

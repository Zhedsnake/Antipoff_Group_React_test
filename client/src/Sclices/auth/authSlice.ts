import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { logInRequest, registerRequest } from '../../api/auth';

// Интерфейс аутентификации
interface AuthState {
  isAuthenticated: boolean;
  user: { [key: string]: any } | null;
}
// Определение начального состояния аутентификации
const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

// Асинхронное действие для входа
export const logIn = createAsyncThunk(
  'auth/logIn',
  async ({ email, password }: { email: string; password: string }) => {
    const data = await logInRequest(email, password);
    return data;
  }
);

// Асинхронное действие для регистрации
export const register = createAsyncThunk(
  'auth/register',
  async ({ email, password }: { email: string; password: string }) => {
    const data = await registerRequest(email, password);
    return data;
  }
);

// Создаем слайс для аутентификации
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Действие для выхода
    logOut: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem('token');
    },
  },
  // Дополнительные действие после отработки асинхронных действий для входа и регистрации
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

// Экспортируем действия
export const { logOut } = authSlice.actions;

// Экспортируем редуктор
export default authSlice.reducer;
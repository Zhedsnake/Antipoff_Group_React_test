import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Интерфейс формы аутентификации
interface AuthFormState {
  email: string;
  password: string;
}
// Начальная форма аутентификации
const initialState: AuthFormState = {
  email: '',
  password: '',
};

// Создаем слайс для формы аутентификации
const authFormSlice = createSlice({
  name: 'authForm',
  initialState,
  reducers: {
    // Обновление поля email
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    // Обновление поля password
    setPassword(state, action: PayloadAction<string>) {
      state.password = action.payload;
    },
  },
});

// Экспортируем действия
export const { setEmail, setPassword } = authFormSlice.actions;

// Экспортируем редуктор
export default authFormSlice.reducer;
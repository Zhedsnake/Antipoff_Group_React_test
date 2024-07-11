import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { isValidEmail } from '../../utils/validation';

// Интерфейс формы аутентификации
interface AuthFormState {
  email: string;
  password: string;
  emailError: string;
  passwordError: string;
}
// Начальная форма аутентификации
const initialState: AuthFormState = {
  email: '',
  password: '',
  emailError: '',
  passwordError: '',
};

// Создаем слайс для формы аутентификации
const authFormSlice = createSlice({
  name: 'authForm',
  initialState,
  reducers: {
    // Обновление поля email и проверка его валидности
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
      state.emailError = isValidEmail(action.payload) ? '' : 'Invalid email address';
    },
    // Обновление поля password и простая проверка длины
    setPassword(state, action: PayloadAction<string>) {
      state.password = action.payload;
      state.passwordError = action.payload.length > 6 || length > 14 ? '' : 'Password must be between 6 and 14 characters';
    },
    // Сброс формы
    resetForm(state) {
      state.email = '';
      state.password = '';
      state.emailError = '';
      state.passwordError = '';
    },
  },
});

// Экспортируем действия
export const { setEmail, setPassword } = authFormSlice.actions;

// Экспортируем редуктор
export default authFormSlice.reducer;
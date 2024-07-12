import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { isValidEmail, isValidPassword } from '../../utils/validation';

import { MIN_PASSWORD_LENGTH, MAX_PASSWORD_LENGTH } from '../../api/config';

// Интерфейс формы аутентификации
interface AuthFormState {
  mode: 'login' | 'register';
  email: string;
  password: string;
  confirmPassword: string;
  emailError: string;
  passwordError: string;
  confirmPasswordError: string;
  showPassword: boolean;
  showConfirmPassword: boolean;
}
// Начальная форма аутентификации
const initialState: AuthFormState = {
  mode: 'register',
  email: '',
  password: '',
  confirmPassword: '',
  emailError: '',
  passwordError: '',
  confirmPasswordError: '',
  showPassword: false,
  showConfirmPassword: false,
};

// Создаем слайс для формы аутентификации
const authFormSlice = createSlice({
  name: 'authForm',
  initialState,
  reducers: {
    // Обновление режима формы
    toggleMode(state) {
      state.mode = state.mode === 'login' ? 'register' : 'login';
    },
    // Обновление поля email и проверка его валидности
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
      state.emailError = isValidEmail(action.payload) ? '' : 'Неверный адрес электронной почты';
    },
    // Обновление поля password и простая проверка длинны
    setPassword(state, action: PayloadAction<string>) {
      state.password = action.payload;
      state.passwordError = isValidPassword(action.payload) ? '' : `Длина пароля должна составлять от ${MIN_PASSWORD_LENGTH} до ${MAX_PASSWORD_LENGTH} символов`;
    },
    // Обновление поля confirmPassword и проверка его соответствия с password
    setConfirmPassword(state, action: PayloadAction<string>) {
      state.confirmPassword = action.payload;
      state.confirmPasswordError = action.payload === state.password ? '' : 'Пароли не совпадают';
    },
    toggleShowPassword(state) {
      state.showPassword = !state.showPassword;
    },
    toggleShowConfirmPassword(state) {
      state.showConfirmPassword = !state.showConfirmPassword;
    },
  },
});

// Экспортируем действия
export const { toggleMode, setEmail, setPassword, setConfirmPassword, toggleShowPassword, toggleShowConfirmPassword } = authFormSlice.actions;

// Экспортируем редуктор
export default authFormSlice.reducer;

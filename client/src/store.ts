import { configureStore } from '@reduxjs/toolkit';
import authReducer from './sclices/auth/authSlice';
import authFormReducer from './sclices/authForm/authFormSlice';

//! Фигня, патом разберусь
import usersReducer from './sclices/users/usersSlice';

// Конфигурируем store с редукторами
const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer,
    authForm: authFormReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
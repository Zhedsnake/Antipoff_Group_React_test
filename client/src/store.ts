import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Sclices/auth/authSlice';
import usersReducer from './Sclices/users/usersSlice';
import authFormReducer from './Sclices/authForm/authFormSlice';

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

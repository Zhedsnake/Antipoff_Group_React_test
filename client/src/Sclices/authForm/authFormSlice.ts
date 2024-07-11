import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthFormState {
  email: string;
  password: string;
}

const initialState: AuthFormState = {
  email: '',
  password: '',
};

const authFormSlice = createSlice({
  name: 'authForm',
  initialState,
  reducers: {
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    setPassword(state, action: PayloadAction<string>) {
      state.password = action.payload;
    },
  },
});

export const { setEmail, setPassword } = authFormSlice.actions;
export default authFormSlice.reducer;

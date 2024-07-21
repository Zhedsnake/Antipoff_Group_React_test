// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { fetchUsers } from '../../api/getUsers';
// import { fetchUser } from '../../api/getUser';
//
// interface User {
//   id: number;
//   first_name: string;
//   last_name: string;
//   avatar: string;
// }
//
// interface UsersState {
//   users: User[];
//   user: any,
//   status: 'idle' | 'succeeded';
//   currentPage: number,
// }
//
// const initialState: UsersState = {
//   users: [],
//   user: null,
//   status: 'idle',
//   currentPage: 1,
// };
//
// // Асинхронное действие для получения пользователей
// export const getUsers = createAsyncThunk(
//   'users/getUsers',
//   async (page: number) => {
//     const users = await fetchUsers(page);
//     return users;
//   }
// );
//
// export const getUser = createAsyncThunk(
//   'users/getUser',
//   async (userId: string) => {
//     const response = await fetchUser(userId);
//     return response;
//   }
// );
//
// const usersSlice = createSlice({
//   name: 'users',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(getUsers.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.users = action.payload;
//       })
//       .addCase(getUser.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//
//         //!
//         console.log(state.user);
//
//         state.user = action.payload;
//       });
//   },
// });
//
// export default usersSlice.reducer;

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {thunk} from "redux-thunk";
import {logInRegReducer} from "./logInRegReducer";


const rootReducer = combineReducers({
    logInRegReducer
})


const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
    devTools: true,
});

export default store;
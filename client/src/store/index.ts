import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {thunk} from "redux-thunk";
import {logInRegReducer} from "./logInRegReducer";
import {stuffsReducer} from "./stuffsReducer";
import {authFormReducer} from "./authForm";


const rootReducer = combineReducers({
    logInRegReducer,
    stuffsReducer,
    authFormReducer
})


const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
    devTools: true,
});

export default store;
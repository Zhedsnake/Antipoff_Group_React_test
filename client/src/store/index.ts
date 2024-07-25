import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {thunk} from "redux-thunk";
import {logInRegReducer} from "./logInRegReducer";
import {getStuffsReducer} from "./stuffsReducer";


const rootReducer = combineReducers({
    logInRegReducer,
    getStuffsReducer
})


const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
    devTools: true,
});

export default store;
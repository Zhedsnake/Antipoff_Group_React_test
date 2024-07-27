import {combineReducers} from "@reduxjs/toolkit";
import {oneStuffReducer} from "./stuffsReducers/oneStuffReducer";
import {stuffsReducer} from "./stuffsReducers/stuffsReducer";
import {logInReducer} from "./logIn-Registration/logInReducer";
import {registrationReducer} from "./logIn-Registration/registrationReducer";


export const rootReducer = combineReducers({
    oneStuff: oneStuffReducer,
    stuffs: stuffsReducer,
    logIn: logInReducer,
    registration: registrationReducer,
})

export type RootState = ReturnType<typeof rootReducer>

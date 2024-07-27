import {combineReducers} from "@reduxjs/toolkit";
import {oneStuffReducer} from "./oneStuffReducer";
import {stuffsReducer} from "./stuffsReducer";


export const rootReducer = combineReducers({
    oneStuff: oneStuffReducer,
    stuffs: stuffsReducer,
})

export type RootState = ReturnType<typeof rootReducer>

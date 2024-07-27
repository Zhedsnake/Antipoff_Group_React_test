import {Dispatch} from "react";
import {LogInAction, LogInActionTypes} from "../../../types/logInRegistration/logIn";


export const defLogIn = () => {
    return async (dispatch: Dispatch<LogInAction>) => {
            dispatch({type: LogInActionTypes.DEF_LOG_IN})
    }
}
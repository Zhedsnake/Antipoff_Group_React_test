import {Dispatch} from "react";
import {RegistrationAction, RegistrationActionTypes} from "../../../types/logInRegistration/registration";


export const defReg = () => {
    return async (dispatch: Dispatch<RegistrationAction>) => {
        dispatch({type: RegistrationActionTypes.DEF_REG})
    }
}
import {RegistrationAction, RegistrationActionTypes} from "../../../types/logInRegistration/registration";
import {Dispatch} from "react";
import AuthService from "../../../api/AuthService";


export const registrationAction = (email: string, password: string) => {
    return async (dispatch: Dispatch<RegistrationAction>) => {
        try {
            dispatch({type: RegistrationActionTypes.REGISTRATION})
            const response = await AuthService.registerRequest(email, password);
            dispatch({type: RegistrationActionTypes.REGISTRATION_SUCCESS, payload: response.token})
        } catch (e) {
            if (e instanceof Error) {
                dispatch({
                    type: RegistrationActionTypes.REGISTRATION_ERROR,
                    payload: `${e.message}`
                })
            }
        }
    }
}
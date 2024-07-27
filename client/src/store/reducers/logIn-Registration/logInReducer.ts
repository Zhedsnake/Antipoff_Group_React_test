import {LogInAction, LogInActionTypes, LogInState} from "../../../types/logInRegistration/logIn";

const defaultLogIn: LogInState = {
    logInToken: '',
    logInLoading: false,
    logInError: null,
};

export const logInReducer = (state = defaultLogIn, action: LogInAction): LogInState => {
    switch (action.type) {
        case LogInActionTypes.LOG_IN:
            return { logInLoading: true, logInError: null, logInToken: '' };
        case LogInActionTypes.LOG_IN_SUCCESS:
            return { logInLoading: false, logInError: null, logInToken: action.payload };
        case LogInActionTypes.LOG_IN_ERROR:
            return { logInLoading: false, logInError: action.payload, logInToken: '' };
        default:
            return state;
    }
};

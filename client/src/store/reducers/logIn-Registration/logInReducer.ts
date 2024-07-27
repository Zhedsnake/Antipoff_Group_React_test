import {LogInAction, LogInActionTypes, LogInState} from "../../../types/logInRegistration/logIn";

const defaultLogIn: LogInState = {
    logInToken: '',
    logInLoading: false,
    logInError: null,
};

export const logInReducer = (state = defaultLogIn, action: LogInAction): LogInState => {
    switch (action.type) {
        case LogInActionTypes.LOG_IN:
            return { ...state, logInLoading: true };
        case LogInActionTypes.LOG_IN_SUCCESS:
            return { ...state, logInLoading: false, logInToken: action.payload };
        case LogInActionTypes.LOG_IN_ERROR:
            return { ...state, logInLoading: false, logInToken: action.payload };
        default:
            return state;
    }
};

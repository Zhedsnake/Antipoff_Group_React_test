import AuthService from "../api/AuthService";

const defaultLogInRed = {
    token: null,
};

const LOG_IN = "LOG_IN";
const REGISTRATION = "REGISTRATION";

export const logInRegReducer = (state = defaultLogInRed, action) => {
    switch (action.type) {
        case LOG_IN:
            return { ...state, token: action.payload };
        case REGISTRATION:
            return { ...state, token: action.payload  };
        default:
            return state;
    }
};

export const logInAction = (email, password) => async (dispatch) => {
    const response = await AuthService.logInRequest(email, password);
    dispatch({ type: LOG_IN, payload: response.data.token });
};

export const registrationAction = (email, password) => async (dispatch) => {
    const response = await AuthService.registerRequest(email, password);
    dispatch({ type: REGISTRATION, payload: response.data.token });
};

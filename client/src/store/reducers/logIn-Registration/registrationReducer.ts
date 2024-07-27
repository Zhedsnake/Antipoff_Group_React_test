import {RegistrationAction, RegistrationActionTypes, RegistrationState} from "../../../types/logInRegistration/registration";

const defaultReg: RegistrationState = {
    regToken: '',
    regLoading: false,
    regError: null,
};

export const registrationReducer = (state = defaultReg, action: RegistrationAction): RegistrationState => {
    switch (action.type) {
        case RegistrationActionTypes.REGISTRATION:
            return { ...state, regLoading: true };
        case RegistrationActionTypes.REGISTRATION_SUCCESS:
            return { ...state, regLoading: false, regToken: action.payload };
        case RegistrationActionTypes.REGISTRATION_ERROR:
            return { ...state, regLoading: false, regToken: action.payload };
        default:
            return state;
    }
};

import {RegistrationAction, RegistrationActionTypes, RegistrationState} from "../../../types/logInRegistration/registration";

const defaultReg: RegistrationState = {
    regToken: '',
    regLoading: false,
    regError: null,
};

export const registrationReducer = (state = defaultReg, action: RegistrationAction): RegistrationState => {
    switch (action.type) {
        case RegistrationActionTypes.REGISTRATION:
            return { regLoading: true, regError: null, regToken: '' };
        case RegistrationActionTypes.REGISTRATION_SUCCESS:
            return { regLoading: false, regError: null, regToken: action.payload };
        case RegistrationActionTypes.REGISTRATION_ERROR:
            return { regLoading: false, regError: action.payload, regToken: '' };
        default:
            return state;
    }
};

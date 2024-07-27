
const defLogReg = {
  name: '',
  email: '',
  password: '',
};
const defConfirmPassword = { confPassword: ''};
const defLogRegErrors = {
  nameError: '',
  emailError: '',
  passwordError: '',
  confirmPasswordError: '',
};

const NAME = "NAME";
const EMAIL = "EMAIL";
const PASSWORD = "PASSWORD";
const CONF_PASSWORD = "CONF_PASSWORD";
const NAME_ERROR_PASSWORD = "NAME_ERROR_PASSWORD";
const EMAIL_ERROR_PASSWORD = "EMAIL_ERROR_PASSWORD";
const PASSWORD_ERROR_PASSWORD = "PASSWORD_ERROR_PASSWORD";
const CONF_PASSWORD_ERROR_PASSWORD = "CONF_PASSWORD_ERROR_PASSWORD";

const DEF_INPUTS = "DEF_INPUTS";

export const authFormReducer = (state = {defLogReg, defConfirmPassword, defLogRegErrors}, action) => {
  switch (action.type) {
    case NAME:
      return {...state, name: action.payload}
    case EMAIL:
      return {...state, email: action.payload}
    case PASSWORD:
      return {...state, password: action.payload}
    case CONF_PASSWORD:
      return {...state, confPassword: action.payload}
    case NAME_ERROR_PASSWORD:
      return {...state, nameError: action.payload}
    case EMAIL_ERROR_PASSWORD:
      return {...state, emailError: action.payload}
    case PASSWORD_ERROR_PASSWORD:
      return {...state, passwordError: action.payload}
    case CONF_PASSWORD_ERROR_PASSWORD:
      return {...state, confirmPasswordError: action.payload}
    case DEF_INPUTS:
      return {...state, ...defLogReg, ...defConfirmPassword, ...defLogRegErrors}
    default:
      return state;
  }
};

export const setNameAction = (payload) => ({type: NAME, payload});
export const setEmailAction = (payload) => ({type: EMAIL, payload});
export const setPasswordAction = (payload) => ({type: PASSWORD, payload});
export const setConfirmPasswordAction = (payload) => ({type: CONF_PASSWORD, payload});
export const setDefInputs = () => ({type: DEF_INPUTS});
export const setNameErrorAction = (payload) => ({type: NAME_ERROR_PASSWORD, payload});
export const setEmailErrorAction = (payload) => ({type: EMAIL_ERROR_PASSWORD, payload});
export const setPasswordErrorAction = (payload) => ({type: PASSWORD_ERROR_PASSWORD, payload});
export const setConfirmPasswordErrorAction = (payload) => ({type: CONF_PASSWORD_ERROR_PASSWORD, payload});

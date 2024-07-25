import { Dispatch, SetStateAction } from "react";
import {ConfirmPasswordType, LogRegErrorsType, LogRegType, ToggleShowType} from "./AuthForm";


export interface AuthContextType {
    isAuth: boolean;
    setIsAuth: Dispatch<SetStateAction<boolean>>;
    isLoading: boolean;
    defaultInputs: () => void;
    logReg: LogRegType;
    setLogReg: Dispatch<SetStateAction<LogRegType>>;
    confirmPassword: ConfirmPasswordType;
    setConfirmPassword: Dispatch<SetStateAction<ConfirmPasswordType>>;
    errorsLogReg: LogRegErrorsType;
    setErrorsLogReg: Dispatch<SetStateAction<LogRegErrorsType>>;
    toggleShow: ToggleShowType;
    setToggleShow: Dispatch<SetStateAction<ToggleShowType>>;
}

export const defaultAuthContext: AuthContextType = {
    isAuth: false,
    setIsAuth: () => {},
    isLoading: false,
    defaultInputs: () => {},
    logReg: { name: '', email: '', password: '' },
    setLogReg: () => {},
    confirmPassword: { defConf: '' },
    setConfirmPassword: () => {},
    errorsLogReg: { nameError: '', emailError: '', passwordError: '', confirmPasswordError: '' },
    setErrorsLogReg: () => {},
    toggleShow: { toggleShowPassword: false, toggleShowConfirmPassword: false },
    setToggleShow: () => {},
};


export interface LogRegType {
    name: string,
    email: string,
    password: string
}

export interface ConfirmPasswordType {
    defConf: string
}

export interface LogRegErrorsType {
    nameError: string,
    emailError: string,
    passwordError: string,
    confirmPasswordError: string,
}

export interface ToggleShowType {
    toggleShowPassword: boolean;
    toggleShowConfirmPassword: boolean;
}
import React, {useEffect} from 'react';
import FormAuth from "../UI/formAuth/FormAuth";
import AuthHeader from "../UI/authHeader/AuthHeader";
import NameInput from "./NameInput";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import FormButton from "../UI/formButton/FormButton";

const LogInForm = (props) => {

    return (
        <FormAuth>
            <AuthHeader>Вход</AuthHeader>
            <NameInput />
            <EmailInput />
            <PasswordInput />
            <FormButton onClick={props.handleLogIn}>Войти</FormButton>
        </FormAuth>
    );
};

export default LogInForm;
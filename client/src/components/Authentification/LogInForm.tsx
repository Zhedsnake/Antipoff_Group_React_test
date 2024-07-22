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
            <NameInput logReg={props.logReg} setLogReg={props.setLogReg} errors={props.errors} />
            <EmailInput logReg={props.logReg} setLogReg={props.setLogReg} errors={props.errors} />
            <PasswordInput
                logReg={props.logReg}
                setLogReg={props.setLogReg}

                errors={props.errors}

                toggleShow={props.toggleShow}
                setToggleShow={props.setToggleShow}
            />
            <FormButton onClick={props.handleLogIn}>Войти</FormButton>
        </FormAuth>
    );
};

export default LogInForm;
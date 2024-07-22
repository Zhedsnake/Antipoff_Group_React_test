import React, {useEffect} from 'react';
import FormAuth from "../UI/formAuth/FormAuth";
import AuthHeader from "../UI/authHeader/AuthHeader";
import NameInput from "./NameInput";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import ConfirmPasswordInput from "./ConfirmPasswordInput";
import FormButton from "../UI/formButton/FormButton";

const RegForm = (props) => {

    return (
        <FormAuth>
            <AuthHeader>Регистрация</AuthHeader>
            <NameInput logReg={props.logReg} setLogReg={props.setLogReg} errors={props.errors} />
            <EmailInput logReg={props.logReg} setLogReg={props.setLogReg} errors={props.errors} />
            <PasswordInput
                logReg={props.logReg}
                setLogReg={props.setLogReg}

                errors={props.errors}

                toggleShow={props.toggleShow}
                setToggleShow={props.setToggleShow}
            />
            <ConfirmPasswordInput
                confirmPassword={props.confirmPassword}
                setConfirmPassword={props.setConfirmPassword}

                errors={props.errors}

                toggleShow={props.toggleShow}
                setToggleShow={props.setToggleShow}
            />
            <FormButton onClick={props.handleRegister}>Зарегистрироваться</FormButton>
        </FormAuth>
    );
};

export default RegForm;
import React, {useContext, useState} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import FormGroupDiv from "../UI/formGroupdiv/formGroupdiv";
import Label from "../UI/label/label";
import PasswordContainer from "../UI/passwordContainer/PasswordContainer";
import InputAuth from "../UI/inputAuth/InputAuth";
import PasswordToggleButton from "../UI/passwordToggleButton/PasswordToggleButton";
import ErrorForm from "../UI/errorForm/ErrorForm";
import {AuthContext} from "../../context";
import {useDispatch, useSelector} from "react-redux";
import {setConfirmPasswordAction} from "../../store/authForm";

const ConfirmPasswordInput: React.FC = () => {
    const dispatch = useDispatch();
    const confirmPassword = useSelector(state => state.authFormReducer.confirmPassword);
    const confirmPasswordError = useSelector(state => state.authFormReducer.confirmPasswordError);

    const {
        toggleShow,
        setToggleShow
    } = useContext(AuthContext);

    return (
        <FormGroupDiv>
            <Label htmlFormName={"confirmPassword"}>Подтвердить пароль</Label>
            <PasswordContainer>
                <InputAuth
                    type={toggleShow.toggleShowConfirmPassword ? 'text' : 'password'}
                    id="confirmPassword"
                    value={confirmPassword}
                    maxLength={30}
                    onChange={(e) => dispatch(setConfirmPasswordAction(e.target.value))}
                />
                <PasswordToggleButton
                    type="button"
                    onClick={() => setToggleShow({...toggleShow, toggleShowConfirmPassword: true})}
                >
                    <FontAwesomeIcon icon={toggleShow.toggleShowConfirmPassword ? faEyeSlash : faEye} />
                </PasswordToggleButton>
            </PasswordContainer>
            {confirmPasswordError && <ErrorForm>{confirmPasswordError}</ErrorForm>}
        </FormGroupDiv>
    );
};

export default ConfirmPasswordInput;

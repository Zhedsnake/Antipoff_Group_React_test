import React, {useContext, useState} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import FormGroupDiv from "../UI/formGroupdiv/formGroupdiv";
import Label from "../UI/label/label";
import InputAuth from "../UI/inputAuth/InputAuth";
import ErrorForm from "../UI/errorForm/ErrorForm";
import PasswordToggleButton from "../UI/passwordToggleButton/PasswordToggleButton";
import PasswordContainer from "../UI/passwordContainer/PasswordContainer";
import {AuthContext} from "../../context";
import {useDispatch, useSelector} from "react-redux";
import {setPasswordAction} from "../../store/authForm";

const PasswordInput: React.FC = () => {
    const dispatch = useDispatch();
    const password = useSelector(state => state.authFormReducer.password);
    const passwordError = useSelector(state => state.authFormReducer.passwordError);

    const {
        toggleShow,
        setToggleShow
    } = useContext(AuthContext);

    return (
        <FormGroupDiv>
            <Label htmlFormName={"password"}>Пароль</Label>
            <PasswordContainer>
                <InputAuth
                  type={toggleShow.toggleShowPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  maxLength={30}
                  onChange={(e) => dispatch(setPasswordAction(e.target.value))}
                />
                <PasswordToggleButton
                    type="button"
                    onClick={() => setToggleShow({...toggleShow, toggleShowPassword: true})}
                >
                    <FontAwesomeIcon icon={toggleShow.toggleShowPassword ? faEyeSlash : faEye} />
                </PasswordToggleButton>
            </PasswordContainer>
            {passwordError && <ErrorForm>{passwordError}</ErrorForm>}
        </FormGroupDiv>
    );
};

export default PasswordInput;

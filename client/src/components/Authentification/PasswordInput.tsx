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

const PasswordInput: React.FC = () => {
    const {
        logReg,
        setLogReg,
        errorsLogReg,
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
                  value={logReg.password}
                  maxLength={30}
                  onChange={(e) => setLogReg({...logReg, password: e.target.value})}
                />
                <PasswordToggleButton
                    type="button"
                    onClick={() => setToggleShow({...toggleShow, toggleShowPassword: true})}
                >
                    <FontAwesomeIcon icon={toggleShow.toggleShowPassword ? faEyeSlash : faEye} />
                </PasswordToggleButton>
            </PasswordContainer>
            {errorsLogReg.passwordError && <ErrorForm>{errorsLogReg.passwordError}</ErrorForm>}
        </FormGroupDiv>
    );
};

export default PasswordInput;

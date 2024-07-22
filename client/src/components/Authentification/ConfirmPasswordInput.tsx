import React, {useState} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import FormGroupDiv from "../UI/formGroupdiv/formGroupdiv";
import Label from "../UI/label/label";
import PasswordContainer from "../UI/passwordContainer/PasswordContainer";
import InputAuth from "../UI/inputAuth/InputAuth";
import PasswordToggleButton from "../UI/passwordToggleButton/PasswordToggleButton";
import ErrorForm from "../UI/errorForm/ErrorForm";

const ConfirmPasswordInput: React.FC = ({confirmPassword, setConfirmPassword, toggleShow, setToggleShow, errors}) => {

    return (
        <FormGroupDiv>
            <Label htmlFormName={"confirmPassword"}>Подтвердить пароль</Label>
            <PasswordContainer>
                <InputAuth
                    type={toggleShow.toggleShowConfirmPassword ? 'text' : 'password'}
                    id="confirmPassword"
                    value={confirmPassword}
                    maxLength={30}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <PasswordToggleButton
                    type="button"
                    onClick={() => setToggleShow({...toggleShow, toggleShowConfirmPassword: true})}
                >
                    <FontAwesomeIcon icon={toggleShow.toggleShowConfirmPassword ? faEyeSlash : faEye} />
                </PasswordToggleButton>
            </PasswordContainer>
            {errors.confirmPasswordError && <ErrorForm>{errors.confirmPasswordError}</ErrorForm>}
        </FormGroupDiv>
    );
};

export default ConfirmPasswordInput;

import React, {useState} from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
// import { setConfirmPassword, toggleShowConfirmPassword } from '../../sclices/authForm/authFormSlice';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import FormGroupDiv from "../UI/formGroupdiv/formGroupdiv";
import Label from "../UI/label/label";
import PasswordContainer from "../UI/passwordContainer/PasswordContainer";
import InputAuth from "../UI/inputAuth/InputAuth";
import PasswordToggleButton from "../UI/passwordToggleButton/PasswordToggleButton";
import ErrorForm from "../UI/errorForm/ErrorForm";

const ConfirmPasswordInput: React.FC = () => {
  // const dispatch = useAppDispatch();
  // const confirmPassword = useAppSelector((state) => state.authForm.confirmPassword);
  // const confirmPasswordError = useAppSelector((state) => state.authForm.confirmPasswordError);
  // const showConfirmPassword = useAppSelector((state) => state.authForm.showConfirmPassword);

  const showConfirmPassword = true;
  const [confirmPassword, setConfirmPassword] = useState('');
  const confirmPasswordError = 'Какая-то ошибка';
  const [toggleShowPassword, setToggleShowConfirmPassword] = useState(true);

    return (
        <FormGroupDiv>
            <Label htmlFormName={"confirmPassword"}>Подтвердить пароль</Label>
            <PasswordContainer>
                <InputAuth
                    type={showConfirmPassword ? 'text' : 'password'}
                    id="confirmPassword"
                    value={confirmPassword}
                    maxLength={30}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <PasswordToggleButton
                    type="button"
                    onClick={() => setToggleShowConfirmPassword(false)}
                >
                    <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
                </PasswordToggleButton>
            </PasswordContainer>
            {confirmPasswordError && <ErrorForm>{confirmPasswordError}</ErrorForm>}
        </FormGroupDiv>
    );
};

export default ConfirmPasswordInput;

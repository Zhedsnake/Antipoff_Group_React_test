import React, {useState} from 'react';
// import { useAppDispatch, useAppSelector } from '../../hooks/hooks';

// import { setPassword, toggleShowPassword } from '../../sclices/authForm/authFormSlice';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import FormGroupDiv from "../UI/formGroupdiv/formGroupdiv";
import Label from "../UI/label/label";
import InputAuth from "../UI/inputAuth/InputAuth";
import ErrorForm from "../UI/errorForm/ErrorForm";
import PasswordToggleButton from "../UI/passwordToggleButton/PasswordToggleButton";
import PasswordContainer from "../UI/passwordContainer/PasswordContainer";

const PasswordInput: React.FC = () => {
  // const dispatch = useAppDispatch();
  // const password = useAppSelector((state) => state.authForm.password);
  // const passwordError = useAppSelector((state) => state.authForm.passwordError);
  // const showPassword = useAppSelector((state) => state.authForm.showPassword);

  const showPassword = true;
  const [password, setPassword] = useState('');
  const passwordError = 'Какая-то ошибка';
  const [toggleShowPassword, setToggleShowPassword] = useState(true);

    return (
        <FormGroupDiv>
            <Label htmlFormName={"password"}>Пароль</Label>
                <PasswordContainer>
                    <InputAuth
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      value={password}
                      maxLength={30}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <PasswordToggleButton
                        type="button"
                        onClick={() => setToggleShowPassword(false)}
                    >
                        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                    </PasswordToggleButton>
                </PasswordContainer>
            {passwordError && <ErrorForm>{passwordError}</ErrorForm>}
        </FormGroupDiv>
    );
};

export default PasswordInput;

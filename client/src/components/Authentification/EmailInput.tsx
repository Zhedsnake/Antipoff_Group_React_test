import React, {useState} from 'react';

// import { useAppDispatch, useAppSelector } from '../../hooks/hooks';

// import { setEmail } from '../../sclices/authForm/authFormSlice';

import FormGroupDiv from "../UI/formGroupdiv/formGroupdiv";
import Label from "../UI/label/label";
import InputAuth from "../UI/inputAuth/InputAuth";
import ErrorForm from "../UI/errorForm/ErrorForm";

const EmailInput: React.FC = () => {
  // const dispatch = useAppDispatch();
  // const email = useAppSelector((state) => state.authForm.email);
  // const emailError = useAppSelector((state) => state.authForm.emailError);

    const [email, setEmail] = useState('');
    const emailError = 'Просто какая-то ошибка';

    return (
        <FormGroupDiv>
            <Label htmlFormName={"email"}>Электронная почта</Label>
            <InputAuth
                type="email"
                id="email"
                value={email}
                maxLength={30}
                onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <ErrorForm>{emailError}</ErrorForm>}
        </FormGroupDiv>
    );
};

export default EmailInput;

import React, {useState} from 'react';

import FormGroupDiv from "../UI/formGroupdiv/formGroupdiv";
import Label from "../UI/label/label";
import InputAuth from "../UI/inputAuth/InputAuth";
import ErrorForm from "../UI/errorForm/ErrorForm";

const EmailInput = ({logReg, setLogReg, errors}) => {

    return (
        <FormGroupDiv>
            <Label htmlFormName={"email"}>Электронная почта</Label>
            <InputAuth
                type="email"
                id="email"
                value={logReg.email}
                maxLength={30}
                onChange={(e) => setLogReg({...logReg, email: e.target.value})}
            />
            {errors.emailError && <ErrorForm>{errors.emailError}</ErrorForm>}
        </FormGroupDiv>
    );
};

export default EmailInput;

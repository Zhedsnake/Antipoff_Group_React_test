import React, {useContext, useState} from 'react';

import FormGroupDiv from "../UI/formGroupdiv/formGroupdiv";
import Label from "../UI/label/label";
import InputAuth from "../UI/inputAuth/InputAuth";
import ErrorForm from "../UI/errorForm/ErrorForm";
import {AuthContext} from "../../context";

const EmailInput = () => {
    const {
        logReg,
        setLogReg,
        errorsLogReg
    } = useContext(AuthContext);


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
            {errorsLogReg.emailError && <ErrorForm>{errorsLogReg.emailError}</ErrorForm>}
        </FormGroupDiv>
    );
};

export default EmailInput;

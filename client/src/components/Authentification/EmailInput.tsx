import React, {useContext, useState} from 'react';

import FormGroupDiv from "../UI/formGroupdiv/formGroupdiv";
import Label from "../UI/label/label";
import InputAuth from "../UI/inputAuth/InputAuth";
import ErrorForm from "../UI/errorForm/ErrorForm";
import {AuthContext} from "../../context";
import {useDispatch, useSelector} from "react-redux";
import {setEmailAction, setNameAction} from "../../store/authForm";

const EmailInput = () => {
    const dispatch = useDispatch();
    const email = useSelector(state => state.authFormReducer.email);
    const emailError = useSelector(state => state.authFormReducer.emailError);

    return (
        <FormGroupDiv>
            <Label htmlFormName={"email"}>Электронная почта</Label>
            <InputAuth
                type="email"
                id="email"
                value={email}
                maxLength={30}
                onChange={(e) => dispatch(setEmailAction(e.target.value))}
            />
            {emailError && <ErrorForm>{emailError}</ErrorForm>}
        </FormGroupDiv>
    );
};

export default EmailInput;

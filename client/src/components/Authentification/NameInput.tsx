import React, {useContext, useState} from 'react';

import InputAuth from "../UI/inputAuth/InputAuth";
import Label from "../UI/label/label";
import FormGroupDiv from "../UI/formGroupdiv/formGroupdiv";
import ErrorForm from "../UI/errorForm/ErrorForm";
import {useDispatch, useSelector} from "react-redux";
import {setNameAction} from "../../store/authForm";

const NameInput = () => {
    const dispatch = useDispatch();
    const name = useSelector(state => state.authFormReducer.name);
    const nameError = useSelector(state => state.authFormReducer.nameError);

    return (
        <FormGroupDiv>
            <Label htmlFormName={"name"}>Имя</Label>
            <InputAuth
                type="text"
                id="name"
                value={name}
                maxLength={30}
                onChange={(e) => dispatch(setNameAction(e.target.value))}
            />
            {nameError && <ErrorForm>{nameError}</ErrorForm>}
        </FormGroupDiv>
    );
};

export default NameInput;
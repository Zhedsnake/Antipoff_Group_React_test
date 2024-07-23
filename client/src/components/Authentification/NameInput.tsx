import React, {useContext, useState} from 'react';

import InputAuth from "../UI/inputAuth/InputAuth";
import Label from "../UI/label/label";
import FormGroupDiv from "../UI/formGroupdiv/formGroupdiv";
import ErrorForm from "../UI/errorForm/ErrorForm";
import {AuthContext} from "../../context";

const NameInput = () => {
    const {
        logReg,
        setLogReg,
        errorsLogReg
    } = useContext(AuthContext);


    return (
        <FormGroupDiv>
            <Label htmlFormName={"name"}>Имя</Label>
            <InputAuth
                type="text"
                id="name"
                value={logReg.name}
                maxLength={30}
                onChange={(e) => setLogReg({...logReg, name: e.target.value})}
            />
            {errorsLogReg.nameError && <ErrorForm>{errorsLogReg.nameError}</ErrorForm>}
        </FormGroupDiv>
    );
};

export default NameInput;
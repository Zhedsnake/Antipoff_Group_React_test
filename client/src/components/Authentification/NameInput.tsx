import React, {useState} from 'react';

import InputAuth from "../UI/inputAuth/InputAuth";
import Label from "../UI/label/label";
import FormGroupDiv from "../UI/formGroupdiv/formGroupdiv";
import ErrorForm from "../UI/errorForm/ErrorForm";

const NameInput = ({logReg, setLogReg, errors}) => {


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
            {errors.nameError && <ErrorForm>{errors.nameError}</ErrorForm>}
        </FormGroupDiv>
    );
};

export default NameInput;
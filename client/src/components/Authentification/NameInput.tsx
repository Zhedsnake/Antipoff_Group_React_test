import React, {useState} from 'react';

import InputAuth from "../UI/inputAuth/InputAuth";
import Label from "../UI/label/label";
import FormGroupDiv from "../UI/formGroupdiv/formGroupdiv";
import ErrorForm from "../UI/errorForm/ErrorForm";

const NameInput = () => {

    const [name, setName] = useState('');
    const nameError = 'Просто какая-то ошибка';

    return (
        <FormGroupDiv>
            <Label htmlFormName={"name"}>Имя</Label>
            <InputAuth
                type="text"
                id="name"
                value={name}
                maxLength={30}
                onChange={(e) => setName(e.target.value)}
            />
            {nameError && <ErrorForm>{nameError}</ErrorForm>}
        </FormGroupDiv>
    );
};

export default NameInput;
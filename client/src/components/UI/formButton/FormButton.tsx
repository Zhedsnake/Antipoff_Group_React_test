import React from 'react';
import classes from "./formButton.module.css";

type FormButtonProps = {
    children: React.ReactNode;
};

const FormButton: React.FC<FormButtonProps> = ({children, ...props}) => {

    return (
        <button {...props} className={classes.authFormButton}>
            <span>
                {children}
            </span>
        </button>
    );
};

export default FormButton;
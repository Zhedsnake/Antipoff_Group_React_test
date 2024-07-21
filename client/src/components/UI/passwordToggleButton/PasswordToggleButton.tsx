import React from 'react';
import classes from "./passwordToggleButton.module.css";

type PasswordToggleButtonProps = {
    children: React.ReactNode;
};

const PasswordToggleButton: React.FC<PasswordToggleButtonProps> = ({children, ...props}) => {

    return (
        <button {...props} className={classes.authPasswordToggleButton}>
            <span>
                {children}
            </span>
        </button>
    );
};

export default PasswordToggleButton;
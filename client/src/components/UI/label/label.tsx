import React from 'react';


type LabelProps = {
    children: React.ReactNode;
};

const Label: React.FC<LabelProps> = ({htmlFormName, children}) => {

    return (
        <label htmlFor={htmlFormName}>{children}</label>
    );
};

export default Label;
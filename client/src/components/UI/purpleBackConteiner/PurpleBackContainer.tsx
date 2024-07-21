import React from 'react';
import classes from "./purpleBackConteiner.module.css";

type PurpleBackContainerProps = {
    children: React.ReactNode;
};

const PurpleBackContainer: React.FC<PurpleBackContainerProps> = ({children}) => {

    return (
        <div className={classes.purpleBackContainer}>
            {children}
        </div>
    );
};

export default PurpleBackContainer;
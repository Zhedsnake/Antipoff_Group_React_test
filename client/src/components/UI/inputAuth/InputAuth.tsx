import React from 'react';


type InputAuthProps = {
    children: React.ReactNode;
};

const InputAuth: React.FC<InputAuthProps> = React.forwardRef((props, ref) => {

    return (
        <input ref={ref} {...props}/>
    );
});

export default InputAuth;
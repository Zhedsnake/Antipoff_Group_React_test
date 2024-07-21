import React from 'react';

import AuthForm from "./AuthForm";

const AuthContainer = () => {

    return (
        <div className="auth">
            <main className="auth__form-container">
                <AuthForm />
            </main>
        </div>
    );
};

export default AuthContainer;
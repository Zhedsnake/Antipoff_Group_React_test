import React from 'react';
import AuthForm from '../components/Authentification/AuthForm';

import '../css/Authentification.css';

const Auth: React.FC = () => {
  return (
    <div className="Auth">
      <AuthForm />
    </div>
  );
};

export default Auth;

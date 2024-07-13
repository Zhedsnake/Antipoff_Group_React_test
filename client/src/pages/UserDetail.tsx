import React from 'react';
import useAuthEffect from '../hooks/useAuthEffect';


import UserDetail from '../components/UserDetail/UserDetail';

// Guards
import GuestGuard from '../components/guards/GuestGuard';


const App: React.FC = () => {
  
  // Восстанавливаем состояние аутентификации из localStorage при монтировании компонента
  useAuthEffect();

  return (
    <GuestGuard>
      <UserDetail/>
    </GuestGuard>
  );
};

export default App;

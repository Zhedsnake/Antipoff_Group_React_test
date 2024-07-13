import React from 'react';
import useAuthEffect from '../hooks/useAuthEffect';


import Header from '../components/App/Header';
import UserList from '../components/App/UserList';

import '../css/App.css';

// Guards
import GuestGuard from '../components/guards/GuestGuard';


const App: React.FC = () => {
  
  // Восстанавливаем состояние аутентификации из localStorage при монтировании компонента
  useAuthEffect();

  return (
    <GuestGuard>
      <div className="app">
        <main className="app__main">
          <Header/>
          <UserList/>
        </main>
      </div>
    </GuestGuard>
  );
};

export default App;

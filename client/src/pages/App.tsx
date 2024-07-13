import React from 'react';


import Header from '../components/App/Header';

import '../css/App.css';


const App: React.FC = () => {
  return (
    <div className="app">
      <main className="app__main">
        <Header/>
      </main>
    </div>
  );
};

export default App;

import React from 'react';


import { LogoutButton } from '../../components/Logout/LogoutButton';
import HiddenBlock from './HiddenBlock';
import Description from './Description';


const Header: React.FC = () => {
  return (
    <header className="app__header">
      <HiddenBlock />
      <Description />
      <LogoutButton />
    </header>
  );
};

export default Header;
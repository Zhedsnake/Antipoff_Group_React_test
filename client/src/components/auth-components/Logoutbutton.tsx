import { Link } from 'react-router-dom';


interface Logoutbutton {
  handleLogout: () => void;
}

function Logout({ handleLogout }: Logoutbutton) {

  return (    
    <button type="button" className="header__auth-button" onClick={handleLogout}>Logout</button>
  );
}

export default Logout;

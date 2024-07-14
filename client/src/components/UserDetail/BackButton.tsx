import React from 'react';
import { Link } from 'react-router-dom';

import backIcon from '../../img/back-icon.svg';

const BackButton: React.FC = () => (
  <div className="user-detail__back-button">
    <Link to={`/`}>
      <button>
        <span className="user-detail__button-text">Назад</span>
        <img className="user-detail__button-icon" src={backIcon} alt="Назад" />
      </button>
    </Link>
  </div>
);

export default BackButton;
import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-left">
        <div className="header-title">
          <h1>DevMetrics</h1>
          <span className="header-subtitle">Dashboard</span>
        </div>
      </div>
      <div className="header-right">
        <div className="header-user">
          <span className="user-name">Usuário</span>
          <div className="user-avatar">U</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
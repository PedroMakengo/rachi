import React from 'react';

import LogoImg from "../../assets/Logo.svg";

const Header = () => {
  return (
    <header>
      <div className="container">
        <img src={LogoImg} alt="" />
        <nav className="nav">
          <a href="/">Funcionalidades</a>
          <a href="/">App</a>
          <a href="/">Planos</a>
          <a href="/">Contacto</a>
        </nav>
      </div>
    </header>
  )
};

export { Header };
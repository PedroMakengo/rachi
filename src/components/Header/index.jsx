import React from 'react';

import { HeaderContent, Nav } from './style.js';

import LogoImg from "../../assets/Logo.svg";

const Header = () => {
  return (
    <HeaderContent>
      <div className="container">
        <img src={LogoImg} alt="" />
        <Nav className="nav">
          <a href="/">Funcionalidades</a>
          <a href="/">App</a>
          <a href="/">Planos</a>
          <a href="/">Contacto</a>
        </Nav>
      </div>
    </HeaderContent>
  )
};

export { Header };
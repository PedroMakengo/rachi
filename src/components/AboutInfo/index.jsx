import React from 'react';

import CriarConexaoImg from '../../assets/CriarConexao.svg';
import GratuitoImg from '../../assets/Gratuito.svg';

import { AboutContent, RowContent } from './style.js';

const About = () => {
  return (
    <AboutContent>
      <div className="container">
        <h1>Como funciona</h1>

        <RowContent>

          <div className="item">
            <img src={CriarConexaoImg} alt="" />
            <h2>Criar conexão</h2>
            <p>Lorem ipsum dolor sit amet, consectetur </p>
          </div>

          <div className="item">
            <img src={GratuitoImg} alt="" />
            <h2>100% gratuito</h2>
            <p>Lorem ipsum dolor sit amet, consectetur </p>
          </div>

          <div className="item">
            <img src={CriarConexaoImg} alt="" />
            <h2>Compartilhamento</h2>
            <p>Lorem ipsum dolor sit amet, consectetur </p>
          </div>
        </RowContent>
      </div>
    </AboutContent>
  )
}

export { About };
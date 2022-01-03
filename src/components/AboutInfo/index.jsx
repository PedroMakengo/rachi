import React from 'react';

import CriarConexaoImg from '../../assets/CriarConexao.svg';
import GratuitoImg from '../../assets/Gratuito.svg';
import CompartilhamentoImg from '../../assets/Compartilhamento.svg';
import { ItemInfo } from './ItemInfo';

import { AboutContent, RowContent } from './style.js';

const About = () => {
  return (
    <AboutContent>
      <div className="container">
        <h1>Como funciona</h1>
        <RowContent>
          <ItemInfo img={CriarConexaoImg} text='Criar conexões' />
          <ItemInfo img={GratuitoImg} text='100% gratuito' />
          <ItemInfo img={CompartilhamentoImg} text='Compartilhamento' />
        </RowContent>
      </div>
    </AboutContent>
  )
}

export { About };
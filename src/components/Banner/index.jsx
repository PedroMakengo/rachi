import React from 'react';

import WorkingImg from '../../assets/working.svg';

import { Banner, TextBanner } from './style.js';

const BannerBackground = () => {
  return (
    <Banner>
      <div className="container">
        <TextBanner>
          <h1>
            Rachi, <br />
            é tudo que você <br />
            precisa em seu lugar.
          </h1>
          <button>Cadastrar-se</button>
        </TextBanner>
          <img src={WorkingImg} alt="" />
      </div>
    </Banner>
  )
}

export { BannerBackground };
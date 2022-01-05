import React from "react";

import { PlansContainer, BaixaApp } from './style.js';
import { FaGooglePlay, FaAppStore } from 'react-icons/fa';
import AppImg from '../../assets/Notificacao.svg';


const PlansApp = () => {
  return(
    <PlansContainer>
      <div className="container">
        <BaixaApp className="baixaApp">
          <h1>Baixe nosso app para desfrutar mais</h1>
          <p>
            Amet in elementum nulla scelerisque dui, egestas at. Elit
            consectetur turpis elementum amet vitae et etiam nec. Varius
            volutpat hac adipiscing tincidunt pretium.
          </p>
          <button>
            <div className="content">
              <FaGooglePlay />
              Google Play
            </div>
          </button>
          <button>
            <div className="content">
              <FaAppStore />
              App Store
            </div>
          </button>
        </BaixaApp>
        <img src={AppImg} alt="" />
      </div>
    </PlansContainer>
  )
}

export { PlansApp };
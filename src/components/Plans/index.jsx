import React from "react";

import AppImg from '../../assets/Notificacao.svg';

import { PlansContainer } from './style.js';

const PlansApp = () => {
  return(
    <PlansContainer>
      <div className="container">
        <div className="baixaApp">
          <h1>Baixe nosso app para desfrutar mais</h1>
          <p>
            Amet in elementum nulla scelerisque dui, egestas at. Elit
            consectetur turpis elementum amet vitae et etiam nec. Varius
            volutpat hac adipiscing tincidunt pretium.
          </p>
        </div>
        <img src={AppImg} alt="" />
      </div>
    </PlansContainer>
  )
}

export { PlansApp };
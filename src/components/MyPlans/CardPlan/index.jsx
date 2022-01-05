import React from 'react';


const CardPlan = ({tipoPlano, valor}) => {

  if(tipoPlano === 'Bronze' || tipoPlano === 'Ouro') {
    return (
      <div className="item">
        <h2>{tipoPlano}</h2>
        <h3><sup>R$</sup> {valor} <sub>/mês</sub></h3>
  
        <p>Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit. 
          Donec lacinia mi quis euismod ultrices
        </p>
  
        <button>Assinar</button>
      </div>
    )
  }else {
    return (
      <div className="item">
        <h2>{tipoPlano}</h2>
        <button className='preferido'>Preferido</button>
        <h3><sup>R$</sup> {valor} <sub>/mês</sub></h3>
  
        <p>Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit. 
          Donec lacinia mi quis euismod ultrices
        </p>
  
        <button>Assinar</button>
      </div>
    )
  }
}

export { CardPlan };
import React from 'react';

import { MyPlansContent, Container, Row } from './style.js';

const MyPlans = () => {
  return (
    <MyPlansContent>
      <Container className="container">
        <h1>Nossos Planos</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec lacinia mi quis euismod ultrices.</p>

        <Row>
          <div className="item">
            <h2>Bronze</h2>
            <h3><sup>R$</sup> 28 <sub>/mês</sub></h3>

            <p>Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit. 
              Donec lacinia mi quis euismod ultrices
            </p>

            <button>Assinar</button>
          </div>
          <div className="item">
            <h2>Prata</h2>
            <button className='preferido'>Preferido</button>
            <h3><sup>R$</sup> 57 <sub>/mês</sub></h3>

            <p>Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit. 
              Donec lacinia mi quis euismod ultrices
            </p>

            <button>Assinar</button>
          </div>
          <div className="item">
            <h2>Ouro</h2>
            <h3><sup>R$</sup> 94 <sub>/mês</sub></h3>

            <p>Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit. 
              Donec lacinia mi quis euismod ultrices
            </p>

            <button>Assinar</button>
          </div>
        </Row>
      </Container>
    </MyPlansContent>
  )
}

export { MyPlans };
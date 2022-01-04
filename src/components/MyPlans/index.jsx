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
            <h3><sup>R$</sup> 28 <sub>/mes</sub></h3>

            <p>Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit. 
              Donec lacinia mi quis euismod ultrices
            </p>

            <button>Assinar</button>
          </div>
          <div className="item">
            <h2>Bronze</h2>
            <h3><sup>R$</sup> 28 <sub>/mes</sub></h3>

            <p>Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit. 
              Donec lacinia mi quis euismod ultrices
            </p>

            <button>Assinar</button>
          </div>
          <div className="item">
            <h2>Bronze</h2>
            <h3><sup>R$</sup> 28 <sub>/mes</sub></h3>

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
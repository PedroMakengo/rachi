import React from 'react';

import { MyPlansContent, Container, Row } from './style.js';


import { CardPlan } from './CardPlan/index.jsx';

const MyPlans = () => {
  return (
    <MyPlansContent>
      <Container className="container">
        <h1>Nossos Planos</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec lacinia mi quis euismod ultrices.</p>

        <Row>
          <CardPlan tipoPlano='Bronze' valor='28' />
          <CardPlan tipoPlano='Prata' valor='57' />
          <CardPlan tipoPlano='Ouro' valor='94' />
        </Row>
      </Container>
    </MyPlansContent>
  )
}

export { MyPlans };
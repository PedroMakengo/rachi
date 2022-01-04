import React from 'react';

import { MyPlansContent, Container } from './style.js';

const MyPlans = () => {
  return (
    <MyPlansContent>
      <Container className="container">
        <h1>Nossos Planos</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec lacinia mi quis euismod ultrices.</p>
      </Container>
    </MyPlansContent>
  )
}

export { MyPlans };
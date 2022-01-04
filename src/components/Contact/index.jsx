import React from 'react';

import { SectionContacts, Container, Row } from './style.js';

const Contact = () => {
  return (
    <SectionContacts>
      <Container className="container">
        <h1>Contato</h1>
        <p>Lorem ipsum dolor sit amet, consectetur
           adipiscing elit. Donec lacinia mi quis euismod 
           ultrices.
        </p>

        <Row></Row>
      </Container>
    </SectionContacts>
  )
}

export { Contact };
import React from 'react';

import { SectionContacts, Container, Form } from './style.js';

const Contact = () => {
  return (
    <SectionContacts>
      <Container className="container">
        <h1>Contato</h1>
        <p>Lorem ipsum dolor sit amet, consectetur
           adipiscing elit. Donec lacinia mi quis euismod 
           ultrices.
        </p>

        <Form></Form>
      </Container>
    </SectionContacts>
  )
}

export { Contact };
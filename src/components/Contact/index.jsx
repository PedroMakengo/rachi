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

        <Form>
           <input type="text" placeholder="Seu melhor email" />
           <button>Enviar</button>
        </Form>
      </Container>
    </SectionContacts>
  )
}

export { Contact };
import styled from "styled-components";
import Banner from '../../assets/Contacto.svg'

export const SectionContacts = styled.section `
  background-image: linear-gradient( rgba(41, 49, 69, 0.7),  rgba(41, 49, 69, 0.7)), url(${Banner});
  background-size: 100%;
  background-position: center;
  height: 52vh;
  
  margin-bottom: 3rem;
  `;

export const Container = styled.div`
  text-align: center;
  padding: 2rem 0;

  h1 {
    color: #fff;
  }
  
  p {
    text-align: center;
    width: 500px;
    margin: 0 auto;
  }
`;

export const Row = styled.div `

  
`;
import styled from "styled-components";
import Banner from '../../assets/Contacto.svg'

export const SectionContacts = styled.section `
  background-image: linear-gradient( rgba(41, 49, 69, 0.7),  rgba(41, 49, 69, 0.7)), url(${Banner});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  /* background-attachment: fixed; */
  height: 52vh;
`;

export const Container = styled.div`
  text-align: center;
  padding: 3rem 0;
  color: #fff;

  h1 {
    margin-bottom: 1rem;
    font-size: 2.2rem;
    font-weight: bold;
  }
  
  p {
    text-align: center;
    width: 500px;
    margin: 0 auto;
  }
`;

export const Form = styled.form `
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;

  input {
    width: 260px;
    padding: 1rem 0rem;

    background: none;
    border: none;
    border-bottom: 1px solid #fff;

    margin-right: 2rem;

    &::placeholder {
      color: #fff;
      font-family: Poppins;
    }
  }

  button {
    width: 150px;
    padding: 1rem 0;

    
    background: #0F9AFE;

    border: 0;
    border-radius: 50px;

    color: #fff;
    font-family: Poppins;
  }
`;
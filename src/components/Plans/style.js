import styled from "styled-components";
import PlansImg from '../../assets/Bg-planos.png';


export const PlansContainer = styled.section`
  height: 475px;
  background: url(${PlansImg});
  margin-bottom: 4rem;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;


export const BaixaApp = styled.div `


  h1 {
    font-size: 2rem;
    font-weight: bold;

    margin-bottom: 1rem;
  }
  p {
    width: 75%;
    text-align: justify;
    font-size: 1.1rem;
    line-height: 26px;

    color: #6E7275;
  }

  button {
    width: 200px;
    height: 60px;

    margin-top: 2rem;
    margin-right: 1.5rem;

    border: 0;
    border-radius: 0.25rem;

    background: #293145;

    font-family: Poppins;
    font-weight: bold;
    color: #fff;
  }

`;
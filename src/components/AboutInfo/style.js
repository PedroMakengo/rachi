import styled from "styled-components";

export const AboutContent = styled.section `
  height: 55vh;

  padding-top: 3rem;
  text-align: center;

  h1 {
    font-weight: bold;
    font-size: 2.2rem;

    color: #293145;
  }
`;


export const RowContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  height: 70%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media (max-width: 480px) {
    display: none;
  }

`;
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

  .item {
    widows: 30%;
    margin-right: 2rem;

    img {
      width: 15%;
    }

    h2 {
      font-size: 1.2rem;
      font-weight: 500;

      margin-top: 0.7rem;
      margin-bottom: 0.7rem;

      color: #293145;
    }

    p {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 26px;

      color: #6E7275;
    }
  }


  @media (max-width: 480px) {
    display: none;
  }

`;
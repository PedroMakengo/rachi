import styled from "styled-components";
import BannerImg from '../../assets/bg-background.svg'

export const Banner = styled.section `
  width: 100%;

  height: 90vh;
  background-image: url(${BannerImg});
  background-position: center;

  align-items: center;

  .container {
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (max-width: 480px) {
    height: 60vh;

    .container {
      flex-direction: column;
      align-items: center;
      justify-content: center;

      padding-top: 2rem;

      img {
        display: none;
      }
    }
  }
`;

export const TextBanner = styled.div`
  width: 50%;

  h1 {
    font-weight: bold;
    font-size: 2.4rem;

    color: #293145;
  }

  button {
    background: #0F9AFE;
    margin-top: 2rem;

    width: 200px;
    height: 56px;

    box-shadow: 1px 3px 4px rgba(19, 125, 224, 0.5);
    border: none;
    border-radius: 50px;

    font-family: Poppins;
    font-weight: 300;
    font-size: 0.9rem;

    color: #fff;
  }

  @media (max-width: 480px) {
    width: 100%;

    h1 {
      font-size: 1.3rem;
    }

    button {
      width: 150px;
      height: 35px;
    }
  }
`;
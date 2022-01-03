import styled from "styled-components";
import BannerImg from '../../assets/bg-background.svg'

export const Banner = styled.section `
  background-image: url(${BannerImg});
  height: 75vh;
  align-items: center;

  .container {
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;


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
`;
import styled from "styled-components";
import BannerImg from '../../assets/bg-background.svg'

export const Banner = styled.section `
  background-image: url(${BannerImg});
  height: 70vh;
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
`;
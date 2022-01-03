import styled from "styled-components";
import PlansImg from '../../assets/Bg-planos.png';


export const PlansContainer = styled.section`
  height: 475px;
  background: url(${PlansImg});

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
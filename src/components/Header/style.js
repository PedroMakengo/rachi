import styled from 'styled-components';


export const HeaderContent = styled.header`
  width: 100%;
  height: 13vh;

  position: fixed;
  background: #fff;

  z-index: 500;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      display: none;
    }
  }

  @media (max-width: 480px) {
    height: 15vh;

    .container {
     /* display: none; */
     button {
       display: block;
       width: 60px;
       height: 40px;

       background: #0F9AFE;
       border: 0;
       border-radius: 50px;

       color: #fff;
     }
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;

  a {
    margin-right: 2rem;
    color: #6E7275;
    text-decoration: none;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;
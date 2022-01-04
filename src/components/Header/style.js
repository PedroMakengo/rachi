import styled from 'styled-components';


export const HeaderContent = styled.header`
  width: 100%;
  height: 13vh;

  position: fixed;
  background: #fff;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
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
`;
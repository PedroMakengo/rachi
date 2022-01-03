import styled from 'styled-components';


export const HeaderContent = styled.header`
  background: #fff;
  height: 13vh;

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
import styled from 'styled-components';


export const HeaderContent = styled.header`
  background: #fff;
  height: 10vh;

  .container {
    max-width: 1000px;
    height: 100%;
    margin: 0 auto;

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
    color: rgba(0, 0, 0, 0.6);
    text-decoration: none;
  }
`;
import styled from "styled-components";

export const MyPlansContent = styled.section `
  padding-top: 3rem;
  padding-bottom: 4rem;
  /* height: 70vh; */
`;


export const Container = styled.div `
  text-align: center;

  h1 {
    font-weight: bold;
    font-size: 2.2rem;

    color: #293145;
    margin-bottom: 1rem;
  }

  > p {
    width: 600px;
    margin: 0 auto;
    text-align: center;
  }
`;


export const Row = styled.div `
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;

  .item {
    width: 32%;
    height: 60vh;
    background: #EFF8FF;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


    border-radius: 0.25rem;

    h2 {
      font-weight: bold;
      margin-bottom: 1.5rem;
    }

    h3 {
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 2rem;

      sup,
      sub {
        font-size: 1rem;
      }
    }

    p {
      width: 300px;
      font-size: 1rem;
      margin-bottom:3rem;
    }

    button {
      width: 220px;
      height: 40px;
      background: #0F9AFE;
    }
  }
`;
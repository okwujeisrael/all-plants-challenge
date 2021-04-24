import styled from 'styled-components';

export const SAppContainer = styled.main`
  width: 70vw;
  margin: 0 auto;
  text-align: center;
  padding-top: 20px;
  position: relative;

  @media only screen and (max-width: 480px) {
    width: 100vw;
    padding-top: 70px;
  }
`;

export const SCardContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  max-width: 100%;
  padding: 10px
  margin: 25px auto;

  @media only screen and (max-width:1040px) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (max-width:750px) {
    grid-template-columns: 1fr;
  }
`;

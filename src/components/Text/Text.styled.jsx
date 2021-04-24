import styled from 'styled-components';

export const SHeaderText = styled.h1`
  width: 60%;
  margin: 20px auto;
  color: green;

  @media only screen and (max-width: 480px) {
    width: 100vw;
    padding: 50px 15x;
  }
`;

export const SHeroText = styled.p`
  width: 60%;
  margin: 15px auto;

  @media only screen and (max-width: 480px) {
    width: 100vw;
    padding: 0 25px;
  }
`;

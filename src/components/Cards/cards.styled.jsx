import styled from 'styled-components';

export const SCard = styled.div`
  height: 500px;
  width: 250px;
  padding: 10px;
  background: yellow;
  margin: 10px auto;
  text-align: left;
  position: relative;
  border: 3px solid black;
`;

export const SImageWrapper = styled.div`
  height: 50%;
  width: 100%;
  overflow: hidden;
`;

export const SCardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const SCardTitle = styled.h3`
  font-weight: bold;
  padding: 10px 0;
`;

export const SCardDescription = styled.p`
  font-size: 1rem;
`;

import styled from 'styled-components';

export const SCart = styled.button`
  position: absolute;
  top: 50px;
  right: 50px;
  border: none;
  background: transparent;
  width: 25px;
  height: 25px;
`;

export const SCardButton = styled.button`
  position: absolute;
  bottom: 10px;
  left: 10px;
  display: inline-block;
  width: 90%;
  height: 1.5rem;
  text-align: center;
  background: green;
  color: white;

  &:hover {
    background: white;
    color: green;
  }
`;

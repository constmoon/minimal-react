import React from 'react';
import styled, { css } from 'styled-components';

const Box = styled.div`
  background: ${(props) => props.color || `red`};
  padding: 1rem;
  display: flex;
`;

const Button = styled.button`
  background: #fff;
  color: #333;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: rgba(255,255,255,0.9);
  }

${props =>
  props.inverted &&
    css`
      background: none;
      border: 2px solid #fff;
      color: #fff;
      &:hover {
        background: #fff;
        color: #333;
      }
    `};
    & + button {
      margin-left: 1rem;
    }
`;

const StyledComponent = () => (
  <Box color="black">
    <Button>Hello</Button>
    <Button inverted={true}>Only Border</Button>
  </Box>
);

export default StyledComponent;

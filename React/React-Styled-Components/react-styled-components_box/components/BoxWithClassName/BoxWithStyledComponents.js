import React from 'react'
import styled from 'styled-components';

const StyledBox = styled.div`
  width: 50vh;
  height: 10vh;
  background-color: ${({ $isBlack }) => ($isBlack ? 'black' : 'green')};
  color: gold;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem;
  &:hover {
    background-color: red
  }
`;




const BoxWithStyledComponents = ({ $isBlack }) => {
  return <StyledBox $isBlack={$isBlack}>
   StyledComponents</StyledBox>;
};

export default BoxWithStyledComponents;
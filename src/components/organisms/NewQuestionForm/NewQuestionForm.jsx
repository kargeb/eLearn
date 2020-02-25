import React from 'react';
import styled from 'styled-components';

const StyledBackground = styled.div`
  position: absolute;
  top: 150px;
  left: 0;
  width: 100%;
  height: calc(100% - 150px);
  z-index: 10;
  opacity: 0.7;
  background-color: #ddd;
  /* filter: blur(60px); */
  /* backdrop-filter: blur(5px); */
`;

const StyledFormWrapper = styled.div`
  position: absolute;
  z-index: 20;
  top: 170px;
  left: 15%;
  width: 70%;
  bottom: 10%;
  background-color: white;
  border: 4px solid #ccc;
  filter: drop-shadow();
`;

const NewQuestionForm = () => (
  <>{/* <StyledBackground />
    <StyledFormWrapper>co</StyledFormWrapper> */}</>
);

export default NewQuestionForm;

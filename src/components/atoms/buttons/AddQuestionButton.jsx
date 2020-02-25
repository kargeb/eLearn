import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 230px;
  height: 60px;
  background-color: white;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 26px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  border: 2px solid black;
  padding: 5px 20px;
  transition: all 0.1s;

  &:hover {
    /* color: #3de123; */
    background-color: rgba(196, 196, 196, 0.2);
    /* color: #fff72d; */
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const StyledAddIcon = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50px;
  border: 2px solid black;
  background-color: #fff72d;
  text-align: center;
  line-height: 22px;
`;

const AddQuestionButton = ({ children }) => (
  <StyledButton>
    {children}
    <StyledAddIcon>+</StyledAddIcon>
  </StyledButton>
);

export default AddQuestionButton;

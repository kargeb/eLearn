import React from 'react';
import styled, { css } from 'styled-components';

const StyledWrapper = styled.div`
  margin: 10px auto;
  /* padding: 10px;
  background-color: #999; */
  width: 80vw;
  min-height: 50px;
  display: flex;
`;

const StyledQuestion = styled.div`
  display: flex;
  background-color: rgba(85, 255, 5, 0.21);
  width: 40%;
  padding: 10px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 36px;
`;

const StyledAnswer = styled.div`
  position: relative;
  background-color: rgba(196, 196, 196, 0.2);
  width: 60%;
  font-size: 14px;
  padding: 10px;
`;

const StyledNumberFiled = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background-color: #f9f9f9;
  margin: 0 15px 0 0;
  text-align: center;
  font-weight: bold;
  font-size: 22px;
  z-index: 2;
`;

const StyledCategoryFiled = styled.div`
  position: absolute;
  width: 50px;
  height: 29px;
  border: 1px solid #ccc;
  color: ${props => {
    switch (props.topic) {
      case 'HTML':
        return 'red';
      case 'JS':
        return '#bcb649';
      default:
        return 'black';
    }
  }};
  top: 0;
  right: 0;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
`;

const Question = ({ item }) => {
  const { question, answer, topic, id } = item;

  return (
    <StyledWrapper>
      <StyledQuestion>
        <StyledNumberFiled>{id}</StyledNumberFiled>
        <h2>{question}</h2>
      </StyledQuestion>
      <StyledAnswer>
        <strong>{answer}</strong>

        <StyledCategoryFiled topic={topic}>
          <code>{topic}</code>
        </StyledCategoryFiled>
      </StyledAnswer>
    </StyledWrapper>
  );
};

export default Question;

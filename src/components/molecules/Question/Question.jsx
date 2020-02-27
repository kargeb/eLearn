import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  margin: 10px auto;
  /* padding: 10px;
  background-color: #999; */
  width: 80vw;
  min-height: 50px;
  display: flex;
  /* filter: blur(8px); */
`;

const StyledQuestion = styled.div`
  display: flex;
  background-color: rgba(85, 255, 5, 0.21);
  width: 40%;
  padding: 10px;
  font-family: Roboto;
  /* font-style: 600; */
  font-weight: 500;
  font-size: 18px;
  line-height: 36px;
`;

const StyledAnswer = styled.div`
  position: relative;
  background-color: rgba(196, 196, 196, 0.2);
  width: 60%;
  /* font-family: 'Open Sans'; */
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  padding: 10px;
  line-height: 26px;
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
        <span>{question}</span>
      </StyledQuestion>
      <StyledAnswer>
        <span>{answer}</span>

        <StyledCategoryFiled topic={topic}>
          <code>{topic}</code>
        </StyledCategoryFiled>
      </StyledAnswer>
    </StyledWrapper>
  );
};

Question.propTypes = {
  item: PropTypes.shape({
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    topic: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  }).isRequired
};

export default Question;

// item: PropTypes.exact({
//   question: PropTypes.string.isRequired,
//   answer: PropTypes.string.isRequired,
//   topic: PropTypes.string.isRequired,
//   id: PropTypes.number.isRequired
// })

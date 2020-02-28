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
  white-space: pre-wrap;
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
  white-space: pre-wrap;
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
  top: 0;
  right: 0;
  width: 50px;
  height: 29px;
  color: ${props => {
    switch (props.category) {
      case 'HTML':
        return 'red';
      case 'JS':
        return '#bcb649';
      default:
        return 'black';
    }
  }};
  font-weight: bold;
  border: 1px solid #ccc;
  text-align: center;
  font-size: 16px;
`;

const StyledSubjectFiled = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  min-width: 50px;
  height: 29px;
  font-weight: bold;
  /* border: 1px solid #ccc; */
  text-align: center;
  font-size: 12px;
`;

const StyledSourceFiled = styled.div`
  position: absolute;
  bottom: 0;
  left: 75%;
  min-width: 50px;
  height: 29px;
  /* font-weight: bold; */
  border: 1px solid #ccc;
  text-align: center;
  font-size: 12px;
`;

const StyledDateFiled = styled.div`
  position: absolute;
  top: 0;
  left: 75%;
  min-width: 50px;
  height: 29px;
  /* font-weight: bold; */
  border: 1px solid #ccc;
  text-align: center;
  font-style: italic;
  font-size: 12px;
`;

const getDatefromId = id => {
  const date = new Date(id);

  return date.toLocaleDateString();
};

const Question = ({ item, index }) => {
  const { question, answer, category, id, subject, source } = item;

  return (
    <StyledWrapper>
      <StyledQuestion>
        <StyledNumberFiled>{index + 1}</StyledNumberFiled>
        <span>{question}</span>
      </StyledQuestion>
      <StyledAnswer>
        <span>{answer}</span>

        <StyledCategoryFiled category={category}>
          <code>{category}</code>
        </StyledCategoryFiled>
        <StyledSubjectFiled>
          <span>{subject}</span>
        </StyledSubjectFiled>
        <StyledSourceFiled>
          <span>{source}</span>
        </StyledSourceFiled>
        <StyledDateFiled>
          <span>{getDatefromId(id)}</span>
        </StyledDateFiled>
      </StyledAnswer>
    </StyledWrapper>
  );
};

Question.propTypes = {
  item: PropTypes.shape({
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    subject: PropTypes.string.isRequired,
    source: PropTypes.string
  }).isRequired,
  index: PropTypes.number.isRequired
};

export default Question;

// item: PropTypes.exact({
//   question: PropTypes.string.isRequired,
//   answer: PropTypes.string.isRequired,
//   category: PropTypes.string.isRequired,
//   id: PropTypes.number.isRequired
// })

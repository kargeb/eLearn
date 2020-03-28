import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

const StyledWrapper = styled.div`
  margin: 10px auto;
  width: 80%;
  min-height: 50px;
  display: flex;
  font-size: 18px;
`;

const StyledProperties = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 250px;
  background-color: white;
`;

const StyledQuestion = styled.div`
  display: flex;
  white-space: pre-wrap;
  background-color: rgba(196, 196, 196, 0.2);
  width: 40%;
  padding: 10px;
  font-family: Roboto;
  font-weight: 500;
  font-size: 16px;
  line-height: 36px;
`;

const StyledAnswer = styled.div`
  position: relative;
  white-space: pre-wrap;
  background-color: rgba(196, 196, 196, 0.2);
  width: 60%;
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  padding: 10px;
  line-height: 36px;

  /* &:hover {
    background-color: blue;
  } */
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

const StyledSourceFiled = styled.div`
  background-color: rgba(196, 196, 196, 0.2);
  width: 50%;
  line-height: 25px;
  height: 50%;
  text-align: center;
  font-weight: bold;
  font-size: 14px;
`;

const StyledDateFiled = styled.div`
  background-color: rgba(196, 196, 196, 0.2);
  width: 50%;
  height: 50%;
  line-height: 25px;
  text-align: center;
  font-style: italic;
  font-size: 12px;
`;

const StyledDescription = styled.div`
  width: 100%;
  height: 50%;
  line-height: 25px;
  text-align: center;
  font-size: 12px;
`;

const StyledIconsWrapper = styled.div`
  align-items: center;
  background-color: #e5e6e5;
  width: 50px;
  display: flex;
  flex-direction: column;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  color: grey;
  margin: 10px 5px 10px 10px;
  font-size: 30px;

  &:hover {
    color: #3de123;
    cursor: pointer;
  }
`;

const getDatefromId = id => {
  const date = new Date(id);

  return date.toLocaleDateString();
};

const Question = ({ item, index, removeQuestion, turnOnEditMode }) => {
  const { question, answer, category, id, topic, source } = item;

  return (
    <StyledWrapper>
      <StyledProperties>
        <StyledSourceFiled>
          <span>{source}</span>
        </StyledSourceFiled>
        <StyledDateFiled>
          <span>{getDatefromId(id)}</span>
        </StyledDateFiled>
        <StyledDescription>1.1. Jakiś rozdział</StyledDescription>
      </StyledProperties>
      <StyledQuestion>
        {/* <StyledNumberFiled>{index + 1}</StyledNumberFiled> */}
        <span>{question}</span>
      </StyledQuestion>
      <StyledAnswer>
        <span>{answer}</span>

        {/* <button type="button" onClick={() => removeQuestion(id)}>
          Usuń
        </button>
        <button type="button" onClick={() => turnOnEditMode(id)}>
          Edytuj
        </button> */}

        {/* <StyledCategoryFiled category={category}>
          <code>{category}</code>
        </StyledCategoryFiled>
        <StyledSubjectFiled>
          <span>{topic}</span>
        </StyledSubjectFiled> */}
      </StyledAnswer>
      <StyledIconsWrapper>
        <StyledIcon icon={faPen} />
        <StyledIcon icon={faTrash} />
      </StyledIconsWrapper>
    </StyledWrapper>
  );
};

Question.propTypes = {
  item: PropTypes.shape({
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    topic: PropTypes.string.isRequired,
    source: PropTypes.string
  }).isRequired,
  index: PropTypes.number.isRequired,
  removeQuestion: PropTypes.func.isRequired,
  turnOnEditMode: PropTypes.func.isRequired
};

export default Question;

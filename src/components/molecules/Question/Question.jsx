import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import AppContext from '../../../context';

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
  flex-direction: column;
  background-color: #e5e6e5;
  width: 50px;
  display: flex;
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

const Question = ({ item, turnOnEditMode }) => {
  const { question, answer, id, source } = item;

  return (
    <AppContext.Consumer>
      {context => (
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
            <span>{question}</span>
          </StyledQuestion>
          <StyledAnswer>
            <span>{answer}</span>
          </StyledAnswer>
          <StyledIconsWrapper>
            <StyledIcon icon={faPen} onClick={() => turnOnEditMode(id)} />
            {/* <StyledIcon icon={faTrash} onClick={() => removeQuestion(id)} /> */}
            <StyledIcon
              icon={faTrash}
              onClick={() => context.removeQuestion(id)}
            />
          </StyledIconsWrapper>
        </StyledWrapper>
      )}
    </AppContext.Consumer>
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
  removeQuestion: PropTypes.func,
  turnOnEditMode: PropTypes.func
};

Question.defaultProps = {
  removeQuestion: () => {},
  turnOnEditMode: () => {}
};

export default Question;

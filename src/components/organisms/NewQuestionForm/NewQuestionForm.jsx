import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../../atoms/buttons/Button';
import Icon from '../../atoms/icons/Icon';
import cancelIcon from '../../../assets/images/CancelIcon.svg';
import confirmIcon from '../../../assets/images/ConfirmIcon.svg';
import Label from '../../atoms/label/Label';
import TextArea from '../../atoms/textarea/TextArea';
import useDropdown from '../../hooks/useDropdown';

// import useInput from '../../atoms/input/useInput';

const StyledInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
  width: 100%;
`;

const StyledBackground = styled.div`
  position: absolute;
  top: 150px;
  left: 0;
  width: 100%;
  height: calc(100% - 150px);
  z-index: 10;
  opacity: 0.7;
  background-color: #ddd;
`;

const StyledFormWrapper = styled.div`
  position: absolute;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  z-index: 20;
  top: 170px;
  left: 15%;
  width: 70%;
  bottom: 10%;
  padding: 10px;
  display: flex;
  background-color: white;
  border: 4px solid #ccc;
`;

const StyledSelectsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
`;

const StyledAddButton = styled(Button)`
  background-color: rgba(255, 247, 45, 0.62);
  width: 150px;
  margin-left: calc(50% - 75px);
`;

const StyledCancelButton = styled(Button)`
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  transform: scale(0.7) translateY(10px);
  margin-left: 100px;

  &:hover,
  &:focus {
    background-color: black;
    transform: scale(0.9) translateY(10px);
  }
`;

const StyledPrompt = styled.span`
  position: absolute;
  color: red;
  font-size: 25px;
  font-weight: bold;
  bottom: 5%;
  left: 5%;
`;

const NewQuestionForm = ({
  editMode,
  toggleFormVisibility,
  addNewQuestion,
  defaultQuestion,
  editQuestion
}) => {
  const [question, setQuestion] = useState(defaultQuestion.question);
  const [answer, setAnswer] = useState(defaultQuestion.answer);
  const [emptyFieldsPrompt, setEmptyFildsPrompt] = useState(false);

  const categories = ['JS', 'HTML', 'GIT', 'React'];
  const topics = ['Funkcje', 'Tablice', 'Hooki', 'Komendy', 'Other'];
  const sources = ['Samuraj', 'ModernJS', 'Roman', 'Doc', 'Other'];

  const [category, CategoryDropdown, setCategory] = useDropdown(
    'Kategoria',
    categories,
    defaultQuestion.category
  );
  const [topic, TopicDropdown, setTopic] = useDropdown(
    'Temat',
    topics,
    defaultQuestion.topic
  );
  const [source, SourceDropdown, setSource] = useDropdown(
    'Żródło',
    sources,
    defaultQuestion.source
  );

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const resetStates = () => {
    setQuestion('');
    setAnswer('');
  };

  const sendQuestion = () => {
    setEmptyFildsPrompt(false);

    const newQuestion = {
      question,
      answer,
      category,
      topic,
      source,
      id: +new Date() // date as number for example: 1582808704000
    };

    if (question && answer && category && topic && source) {
      addNewQuestion(newQuestion);
      resetStates();
      inputRef.current.focus();
    } else {
      setEmptyFildsPrompt(true);
    }
  };

  const sendEditedQuestion = id => {
    setEmptyFildsPrompt(false);

    const editedQuestion = {
      question,
      answer,
      category,
      topic,
      source,
      id
    };

    if (question && answer && category && topic && source) {
      editQuestion(editedQuestion);
      toggleFormVisibility();
    } else {
      setEmptyFildsPrompt(true);
    }
  };

  return (
    <div>
      <StyledBackground />
      <StyledFormWrapper>
        <StyledInputWrapper>
          <Label htmlFor="question">Pytanie:</Label>
          <TextArea
            id="question"
            ref={inputRef}
            value={question}
            onChange={e => setQuestion(e.target.value)}
          />
        </StyledInputWrapper>
        <StyledInputWrapper>
          <Label htmlFor="answer">Odpowiedź:</Label>
          <TextArea
            id="answer"
            value={answer}
            onChange={e => setAnswer(e.target.value)}
          />
        </StyledInputWrapper>
        <StyledSelectsWrapper>
          <CategoryDropdown />
          <TopicDropdown />
          <SourceDropdown />
        </StyledSelectsWrapper>
        <StyledButtonWrapper>
          {editMode ? (
            <StyledAddButton
              onClick={() => sendEditedQuestion(defaultQuestion.id)}
              type="button"
            >
              Zapisz zmiany
              <Icon horizontalGap icon={confirmIcon} />
            </StyledAddButton>
          ) : (
            <StyledAddButton onClick={sendQuestion} type="button">
              Dodaj
              <Icon horizontalGap icon={confirmIcon} />
            </StyledAddButton>
          )}
          {!editMode && (
            <StyledCancelButton onClick={toggleFormVisibility} type="button">
              Porzuć
              <Icon horizontalGap icon={cancelIcon} />
            </StyledCancelButton>
          )}
        </StyledButtonWrapper>
        {emptyFieldsPrompt && <StyledPrompt>Są puste pola!</StyledPrompt>}
      </StyledFormWrapper>
    </div>
  );
};

NewQuestionForm.propTypes = {
  toggleFormVisibility: PropTypes.func.isRequired,
  addNewQuestion: PropTypes.func.isRequired
};

export default NewQuestionForm;

import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from '../../atoms/input/Input';
import Select from '../../atoms/select/Select';
import Button from '../../atoms/buttons/Button';
import Icon from '../../atoms/icons/Icon';
import cancelIcon from '../../../assets/images/CancelIcon.svg';
import confirmIcon from '../../../assets/images/ConfirmIcon.svg';

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
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: absolute;
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

const NewQuestionForm = ({ toggleFormVisibility, handleNewQuestion }) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [category, setCategory] = useState('');
  const [subject, setSubject] = useState('');
  const [prompVisible, setPromptVisibility] = useState(false);

  const categoryOptions = ['JavaScript', 'HTML', 'GIT', 'React'];
  const topicOptions = ['Funkcje', 'Tablice', 'Hooki', 'Komendy'];

  const resetStates = () => {
    setQuestion('');
    setAnswer('');
    setCategory('');
    setSubject('');
  };

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const sendQuestion = () => {
    setPromptVisibility(false);

    const newQuestion = {
      question,
      answer,
      category,
      subject,
      id: null
    };

    if (question && answer && category && subject) {
      handleNewQuestion(newQuestion);
      resetStates();
      inputRef.current.focus();
    } else {
      setPromptVisibility(true);
    }
  };

  return (
    <>
      <StyledBackground />
      <StyledFormWrapper>
        <Input
          refProp={inputRef}
          label="Pytanie: "
          name="questionInput"
          gotValue={question}
          setValue={setQuestion}
        />
        <Input
          label="Odpowiedź: "
          name="answerInput"
          gotValue={answer}
          setValue={setAnswer}
        />
        <StyledSelectsWrapper>
          <Select
            category="Kategoria"
            options={categoryOptions}
            gotValue={category}
            setValue={setCategory}
          />
          <Select
            category="Temat"
            options={topicOptions}
            gotValue={subject}
            setValue={setSubject}
          />
        </StyledSelectsWrapper>
        <StyledButtonWrapper>
          <StyledAddButton onClick={sendQuestion} type="button">
            Dodaj
            <Icon horizontalGap icon={confirmIcon} />
          </StyledAddButton>
          <StyledCancelButton onClick={toggleFormVisibility} type="button">
            Porzuć
            <Icon horizontalGap icon={cancelIcon} />
          </StyledCancelButton>
        </StyledButtonWrapper>
        {prompVisible && <StyledPrompt>Są puste pola!</StyledPrompt>}
      </StyledFormWrapper>
    </>
  );
};

NewQuestionForm.propTypes = {
  toggleFormVisibility: PropTypes.func.isRequired,
  handleNewQuestion: PropTypes.func.isRequired
};

export default NewQuestionForm;

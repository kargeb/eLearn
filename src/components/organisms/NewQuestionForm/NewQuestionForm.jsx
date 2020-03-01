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

const NewQuestionForm = ({ toggleFormVisibility, handleNewQuestion }) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [category, setCategory] = useState('');
  const [subject, setSubject] = useState('');
  const [source, setSource] = useState('');
  const [emptyFieldsPrompt, setEmptyFildsPrompt] = useState(false);

  const [categoryOptions, setCategoryOptions] = useState([
    'JS',
    'HTML',
    'GIT',
    'React'
  ]);
  const [topicOptions, setTopicOptions] = useState([
    'Funkcje',
    'Tablice',
    'Hooki',
    'Komendy',
    'Other'
  ]);
  const [sourceOptions, setSourceOptions] = useState([
    'Samuraj',
    'ModernJS',
    'Roman',
    'Doc',
    'Other'
  ]);

  const addOption = (Category, newOption) => {
    switch (Category) {
      case 'Kategoria':
        setCategoryOptions(prevState => [...prevState, newOption]);
        break;
      case 'Temat':
        setTopicOptions(prevState => [...prevState, newOption]);
        break;
      case 'Źródło':
        setSourceOptions(prevState => [...prevState, newOption]);
        break;
      default:
        break;
    }
  };

  // const categoryOptions = ['JS', 'HTML', 'GIT', 'React'];
  // const topicOptions = ['Funkcje', 'Tablice', 'Hooki', 'Komendy', 'Other'];
  // const sourceOptions = ['Samuraj', 'ModernJS', 'Roman', 'Doc', 'Other'];

  const resetStates = () => {
    setQuestion('');
    setAnswer('');
    // setCategory('');   commented due to stay chosen in next adding questions
    // setSubject('');
  };

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const sendQuestion = () => {
    setEmptyFildsPrompt(false);

    const newQuestion = {
      question,
      answer,
      category,
      subject,
      source,
      id: +new Date() // date as number for example: 1582808704000
    };

    if (question && answer && category && subject && source) {
      handleNewQuestion(newQuestion);
      resetStates();
      inputRef.current.focus();
    } else {
      setEmptyFildsPrompt(true);
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
            addOption={addOption}
            options={categoryOptions}
            gotValue={category}
            setValue={setCategory}
          />
          <Select
            category="Temat"
            addOption={addOption}
            options={topicOptions}
            gotValue={subject}
            setValue={setSubject}
          />
          <Select
            category="Źródło"
            addOption={addOption}
            options={sourceOptions}
            gotValue={source}
            setValue={setSource}
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
        {emptyFieldsPrompt && <StyledPrompt>Są puste pola!</StyledPrompt>}
      </StyledFormWrapper>
    </>
  );
};

NewQuestionForm.propTypes = {
  toggleFormVisibility: PropTypes.func.isRequired,
  handleNewQuestion: PropTypes.func.isRequired
};

export default NewQuestionForm;

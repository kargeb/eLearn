import React, { useState } from 'react';
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
  /* filter: blur(60px); */
  /* backdrop-filter: blur(5px); */
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
  /* text-align: center; */
  display: flex;
  background-color: white;
  /* justify-content: center; */
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
  /* margin-left: 25%; */
  /* background-color: blue; */
  /* justify-content: space-around; */
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

const NewQuestionForm = ({ handleClick }) => {
  const [questionValue, setQuestionValue] = useState('');
  const [answerValue, setAnswerValue] = useState('');

  const categoryOptions = ['JavaScript', 'HTML', 'GIT', 'React'];
  const topicOptions = ['Funkcje', 'Tablice', 'Hooki', 'Komendy'];

  return (
    <>
      <StyledBackground />
      <StyledFormWrapper>
        <Input
          label="Pytanie: "
          name="questionInput"
          gotValue={questionValue}
          setValue={setQuestionValue}
        />
        <Input
          label="Odpowiedź: "
          name="answerInput"
          gotValue={answerValue}
          setValue={setAnswerValue}
        />
        <StyledSelectsWrapper>
          <Select category="Kategoria" options={categoryOptions} />
          <Select category="Temat" options={topicOptions} />
        </StyledSelectsWrapper>
        <StyledButtonWrapper>
          <StyledAddButton onClick={handleClick} type="button">
            Dodaj
            <Icon horizontalGap icon={confirmIcon} />
          </StyledAddButton>
          <StyledCancelButton onClick={handleClick} type="button">
            Porzuć
            <Icon horizontalGap icon={cancelIcon} />
          </StyledCancelButton>
        </StyledButtonWrapper>
      </StyledFormWrapper>
    </>
  );
};

export default NewQuestionForm;

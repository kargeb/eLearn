import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../../atoms/input/Input';
import Select from '../../atoms/select/Select';

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
  position: absolute;
  z-index: 20;
  top: 170px;
  left: 15%;
  width: 70%;
  bottom: 10%;
  padding: 10px;
  /* text-align: center; */
  display: flex;
  flex-direction: column;
  background-color: white;
  align-items: center;
  /* justify-content: center; */
  border: 4px solid #ccc;
`;

const StyledSelectsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
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
        <button onClick={handleClick} type="button">
          Close
        </button>
      </StyledFormWrapper>
    </>
  );
};

export default NewQuestionForm;

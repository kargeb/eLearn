import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../components/atoms/logo/Logo';
import data from '../../assets/dummyData/questions';
import Question from '../../components/molecules/Question/Question';
import AddButton from '../../components/atoms/buttons/AddButton';
import NewQuestionForm from '../../components/organisms/NewQuestionForm/NewQuestionForm';

const StyledAddQuestionButton = styled.div`
  position: fixed;
  bottom: 100px;
  right: 100px;
  /* z-index: 100; */
`;

const QuestionsView = () => {
  const [state, setState] = useState(true);

  const handleAddQuestionButton = () => {
    setState(!state);
  };

  const questions = data;

  return (
    <div>
      <Link to="/">
        <Logo small />
      </Link>
      <ul>
        {questions.map(question => (
          <Question key={question.id} item={question} />
        ))}
      </ul>
      <StyledAddQuestionButton>
        {!state && (
          <AddButton handleClick={handleAddQuestionButton}>
            Dodaj nowe
          </AddButton>
        )}
      </StyledAddQuestionButton>
      {state && <NewQuestionForm handleClick={handleAddQuestionButton} />}
    </div>
  );
};

export default QuestionsView;

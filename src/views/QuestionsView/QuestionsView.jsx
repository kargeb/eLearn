import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../components/atoms/logo/Logo';
import data from '../../assets/dummyData/questions';
import Question from '../../components/molecules/Question/Question';
import AddQuestionButton from '../../components/atoms/buttons/AddQuestionButton';

const StyledAddQuestionButton = styled.div`
  position: fixed;
  bottom: 100px;
  right: 100px;
`;

const QuestionsView = () => (
  <div>
    <Link to="/">
      <Logo small />
    </Link>
    <ul>
      {data.map(question => (
        <Question key={question.id} item={question} />
      ))}
    </ul>
    <StyledAddQuestionButton>
      <AddQuestionButton>Dodaj nowe</AddQuestionButton>
    </StyledAddQuestionButton>
  </div>
);

export default QuestionsView;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../components/atoms/logo/Logo';
import data from '../../assets/dummyData/questions';
import Question from '../../components/molecules/Question/Question';
import Button from '../../components/atoms/buttons/Button';
import NewQuestionForm from '../../components/organisms/NewQuestionForm/NewQuestionForm';
import Icon from '../../components/atoms/icons/Icon';
import plusIcon from '../../assets/images/PlusIcon.svg';

const StyledAddQuestionButton = styled.div`
  position: fixed;
  bottom: 100px;
  right: 100px;
`;

const QuestionsView = () => {
  const [state, setState] = useState(false);
  const [questions, setQuestion] = useState(data);

  const handleAddQuestionButton = () => {
    setState(!state);
  };

  const handleNewQuestion = newQuestion => {
    newQuestion.id = questions.length + 1;
    setQuestion(prevState => [...prevState, newQuestion]);
  };

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
      {!state && (
        <StyledAddQuestionButton>
          <Button onClick={handleAddQuestionButton}>
            Dodaj
            <Icon horizontalGap icon={plusIcon} />
          </Button>
        </StyledAddQuestionButton>
      )}
      {state && (
        <NewQuestionForm
          handleClick={handleAddQuestionButton}
          handleNewQuestion={handleNewQuestion}
        />
      )}
    </div>
  );
};

export default QuestionsView;

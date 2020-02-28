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
  const [isFormVisible, setFormVisibility] = useState(false);
  const [questions, setQuestion] = useState(data);

  const toggleFormVisibility = () => {
    setFormVisibility(!isFormVisible);
  };

  const handleNewQuestion = newQuestion => {
    setQuestion(prevState => [...prevState, newQuestion]);
  };

  return (
    <div>
      <Link to="/">
        <Logo small />
      </Link>
      <ul>
        {questions.map((question, index) => (
          <Question key={question.id} index={index} item={question} />
        ))}
      </ul>
      {!isFormVisible && (
        <StyledAddQuestionButton>
          <Button onClick={toggleFormVisibility}>
            Dodaj
            <Icon horizontalGap icon={plusIcon} />
          </Button>
        </StyledAddQuestionButton>
      )}
      {isFormVisible && (
        <NewQuestionForm
          toggleFormVisibility={toggleFormVisibility}
          handleNewQuestion={handleNewQuestion}
        />
      )}
    </div>
  );
};

export default QuestionsView;

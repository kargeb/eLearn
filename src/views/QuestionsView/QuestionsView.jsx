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
  const [editMode, setEditMode] = useState(false);
  const [editingQuestion, setEditingQuestion] = useState('');

  const toggleFormVisibility = () => {
    setFormVisibility(!isFormVisible);
  };

  const addNewQuestion = newQuestion => {
    setQuestion(prevState => [...prevState, newQuestion]);
  };

  const editQuestion = editedQuestion => {
    const newQuestions = questions.map(question => {
      if (question.id === editedQuestion.id) {
        const edited = { ...editedQuestion };
        return edited;
      }
      return question;
    });

    setQuestion(newQuestions);
    setEditMode(false);
  };

  const removeQuestion = id => {
    const newQuestions = questions.filter(question => question.id !== id);
    setQuestion([...newQuestions]);
  };

  const turnOnEditMode = id => {
    setEditMode(true);
    const pointedQuestion = questions.filter(question => question.id === id);
    setEditingQuestion(pointedQuestion[0]);
    toggleFormVisibility();
  };

  const defaultQuestion = {
    question: '',
    answer: '',
    category: '',
    topic: '',
    source: ''
  };

  return (
    <div>
      <Link to="/">
        <Logo small />
      </Link>
      <ul>
        {questions.map((question, index) => (
          <Question
            key={question.id}
            index={index}
            item={question}
            removeQuestion={removeQuestion}
            turnOnEditMode={turnOnEditMode}
          />
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
          editMode={editMode}
          toggleFormVisibility={toggleFormVisibility}
          addNewQuestion={addNewQuestion}
          defaultQuestion={editMode ? editingQuestion : defaultQuestion}
          editQuestion={editQuestion}
        />
      )}
    </div>
  );
};

export default QuestionsView;

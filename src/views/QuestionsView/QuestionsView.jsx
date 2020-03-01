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
  const [edit, setEdit] = useState(false);
  const [editingQuestion, setEditingQuestion] = useState('');

  const toggleFormVisibility = () => {
    setFormVisibility(!isFormVisible);
  };

  const addNewQuestion = newQuestion => {
    setQuestion(prevState => [...prevState, newQuestion]);
  };

  const removeQuestion = id => {
    const newQuestions = questions.filter(question => question.id !== id);
    setQuestion([...newQuestions]);
  };

  const editQuestion = id => {
    setEdit(true);
    const pointedQuestion = questions.filter(question => question.id == id);
    console.log(pointedQuestion);
    setEditingQuestion(pointedQuestion[0]);
    toggleFormVisibility();
  };

  const defaultQuestion = {
    question: '',
    answer: '',
    category: '',
    subject: '',
    source: ''
  };

  return (
    <div>
      {console.log(editingQuestion)}
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
            editQuestion={editQuestion}
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
          edit={edit}
          toggleFormVisibility={toggleFormVisibility}
          addNewQuestion={addNewQuestion}
          defaultQuestion={edit ? editingQuestion : defaultQuestion}
        />
      )}
    </div>
  );
};

export default QuestionsView;

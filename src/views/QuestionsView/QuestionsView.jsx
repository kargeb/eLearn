import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../components/atoms/logo/Logo';
import data from '../../assets/dummyData/questions';
import Button from '../../components/atoms/buttons/Button';
import NewQuestionForm from '../../components/organisms/NewQuestionForm/NewQuestionForm';
import Icon from '../../components/atoms/icons/Icon';
import CategoryList from '../../components/molecules/categoryList/CategoryList';
import plusIcon from '../../assets/images/PlusIcon.svg';
import firebaseApp from '../../fbase';

const StyledAddQuestionButton = styled.div`
  position: fixed;
  bottom: 100px;
  right: 100px;
`;

const QuestionsView = () => {
  const [isFormVisible, setFormVisibility] = useState(false);
  const [questions, setQuestion] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editingQuestion, setEditingQuestion] = useState('');
  const categories = [
    { name: 'JS', topics: ['Data types', 'Hooki', 'Tablice'] },
    { name: 'HTML', topics: ['Browser', 'Komendy'] },
    { name: 'GIT', topics: ['Gałęzie', 'Commends'] },
    { name: 'React', topics: ['Tablice', 'Other'] }
  ];

  const getAllQuestionsFromServerAsString = () => {
    firebaseApp
      .collection('questionsString')
      .doc('1')
      .get()
      .then(doc => doc.data().all)
      .then(allQuestions => JSON.parse(allQuestions))
      .then(allQuestionsJSON => setQuestion(allQuestionsJSON));
  };

  useEffect(
    () => {
      console.log('jestes w useEffect');

      getAllQuestionsFromServerAsString();

      // return () => stopConnection();
    },
    // [isFormVisible]
    []
  );

  const toggleFormVisibility = () => {
    setFormVisibility(!isFormVisible);
  };

  const addNewQuestion = newQuestion => {
    console.log(newQuestion);

    // setQuestion(prevState => [...prevState, newQuestion]);

    console.log(questions);

    const allQuestions = [...questions, newQuestion];

    console.log(allQuestions);

    const allQuestionsStringyfied = JSON.stringify(allQuestions);

    console.log(allQuestionsStringyfied);

    firebaseApp
      .collection('questionsString')
      .doc('1')
      .set({
        all: allQuestionsStringyfied
      })
      .then(function() {
        console.log('Document written');
      })
      .catch(function(error) {
        console.error('Error adding document: ', error);
      });
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
    const pointedQuestions = questions.filter(question => question.id == id);
    // setQuestion([...newQuestions]);
    console.log(`id pytania:   ${pointedQuestions[0].id}`);
    console.log(`tresc pytania:   ${pointedQuestions[0].question}`);

    // const toDelete = pointedQuestions[0].id.toString();

    // firebaseApp
    //   .collection('questions')
    //   .doc(toDelete)
    //   .delete()
    //   .then(function() {
    //     console.log('Document successfully deleted!');
    //   });

    // .then(getQuestions())
    // .catch(function(error) {
    //   console.error('Error removing document: ', error);
    // });
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
      {console.log(questions)}
      <Link to="/">
        <Logo small />
      </Link>
      <CategoryList
        questions={questions}
        categories={categories}
        removeQuestion={removeQuestion}
      />

      {/* <ul>
        {questions.map((question, index) => (
          <Question
            key={question.id}
            index={index}
            item={question}
            removeQuestion={removeQuestion}
            turnOnEditMode={turnOnEditMode}
          />
        ))}
      </ul> */}
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
          categories={categories}
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

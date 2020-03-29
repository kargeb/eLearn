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
import AppContext from '../../context';

const StyledAddQuestionButton = styled.div`
  position: fixed;
  bottom: 100px;
  right: 100px;
`;

const QuestionsView = () => {
  const [isFormVisible, setFormVisibility] = useState(false);
  const [questions, setQuestion] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [changesInDatabase, setChangesInDatabase] = useState(false);
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

  useEffect(() => {
    console.log('jestes w useEffect');

    getAllQuestionsFromServerAsString();

    setChangesInDatabase(false);

    // return () => stopConnection();
  }, [changesInDatabase]);

  const toggleFormVisibility = () => {
    setFormVisibility(!isFormVisible);
  };

  const addNewQuestion = newQuestion => {
    const allQuestions = [...questions, newQuestion];
    const allQuestionsStringyfied = JSON.stringify(allQuestions);

    firebaseApp
      .collection('questionsString')
      .doc('1')
      .set({
        all: allQuestionsStringyfied
      })
      .then(function() {
        console.log('Document written');
      })
      .then(setChangesInDatabase(true))
      .catch(function(error) {
        console.error('Error adding document: ', error);
      });
  };

  const editQuestion = editedQuestion => {
    console.log('ol questions');
    console.log(questions);
    console.log('qeustion edited: ');
    console.log(editedQuestion);

    const newQuestions = questions.map(question => {
      if (question.id === editedQuestion.id) {
        const edited = { ...editedQuestion };
        return edited;
      }
      return question;
    });

    console.log('newQuestions: ');
    console.log(newQuestions);

    const allQuestionsStringyfied = JSON.stringify(newQuestions);

    console.log('newQuestions stringyfied: ');
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
      .then(setChangesInDatabase(true))
      .catch(function(error) {
        console.error('Error adding document: ', error);
      });

    // setQuestion(newQuestions);
    setEditMode(false);
  };

  const removeQuestion = id => {
    const remainQuestions = questions.filter(question => question.id !== id);

    const remainQuestionsStringyfied = JSON.stringify(remainQuestions);

    firebaseApp
      .collection('questionsString')
      .doc('1')
      .set({
        all: remainQuestionsStringyfied
      })
      .then(function() {
        console.log('Document written');
      })
      .then(setChangesInDatabase(true))
      .catch(function(error) {
        console.error('Error adding document: ', error);
      });
  };

  const turnOnEditMode = id => {
    setEditMode(true);
    const pointedQuestion = questions.filter(question => question.id === id);

    console.log('pointed question: ');
    console.log(pointedQuestion[0]);
    setEditingQuestion(pointedQuestion[0]);
    console.log(`editing quesiotn ${editingQuestion}`);

    toggleFormVisibility();
  };

  const defaultQuestion = {
    question: '',
    answer: '',
    category: '',
    topic: '',
    source: ''
  };

  const context = {
    removeQuestion,
    turnOnEditMode
  };

  return (
    <div>
      <AppContext.Provider value={context}>
        {console.log(questions)}
        <Link to="/">
          <Logo small />
        </Link>
        <CategoryList questions={questions} categories={categories} />
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
            setEditMode={setEditMode}
            editMode={editMode}
            toggleFormVisibility={toggleFormVisibility}
            addNewQuestion={addNewQuestion}
            defaultQuestion={editMode ? editingQuestion : defaultQuestion}
            editQuestion={editQuestion}
          />
        )}
      </AppContext.Provider>
    </div>
  );
};

export default QuestionsView;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../components/atoms/logo/Logo';
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
  const [categories, setCategories] = useState([]);
  const [sources, setSources] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editingQuestion, setEditingQuestion] = useState('');

  const getAllQuestionsFromServerAsString = () => {
    firebaseApp
      .collection('questionsString')
      .doc('1')
      .get()
      .then(doc => doc.data().categoriesAndQuestions)
      .then(dbQuestions => JSON.parse(dbQuestions))
      .then(allQuestions => {
        console.log(allQuestions);
        setQuestion(allQuestions.questions);
        setCategories(allQuestions.categories);
        setSources(allQuestions.sources);
      })
      .then(function() {
        console.log('Document read');
      })
      .catch(function(error) {
        console.error('Error adding document: ', error);
      });
  };

  const toggleFormVisibility = () => {
    setFormVisibility(!isFormVisible);
  };

  useEffect(() => {
    console.log('jestes w useEffect getAllQuestionForFirstTime');
    getAllQuestionsFromServerAsString();
  }, []);

  const updateDatabase = newData => {
    console.log('Old Questions:');
    console.log(questions);

    const docRef = firebaseApp.collection('questionsString').doc('1');

    firebaseApp
      .runTransaction(transaction => {
        return transaction.get(docRef).then(doc => {
          if (!doc.exists) {
            throw 'Document does not exist!';
          }

          transaction.set(docRef, { categoriesAndQuestions: newData });
          return newData;
        });
      })
      .then(dbQuestions => JSON.parse(dbQuestions))
      .then(dbQuestions => {
        setQuestion(dbQuestions.questions);
        setCategories(dbQuestions.categories);
        setSources(dbQuestions.sources);
        return dbQuestions;
      })
      .then(function(dbQuestions) {
        console.log('Document written');
        console.log('New Questions:');
        console.log(dbQuestions.questions);
      })
      .catch(function(error) {
        console.error('Error adding document: ', error);
      });
  };

  const addNewQuestion = newQuestion => {
    const allQuestions = [...questions, newQuestion];
    const newDb = {
      questions: allQuestions,
      categories,
      sources
    };
    const newDbStringified = JSON.stringify(newDb);

    updateDatabase(newDbStringified);
  };

  const editQuestion = editedQuestion => {
    const newQuestions = questions.map(question => {
      if (question.id === editedQuestion.id) {
        const edited = { ...editedQuestion };
        return edited;
      }
      return question;
    });
    const newDb = {
      questions: newQuestions,
      categories,
      sources
    };
    const newDbStringified = JSON.stringify(newDb);

    updateDatabase(newDbStringified);
    setEditMode(false);
  };

  const removeQuestion = id => {
    const remainQuestions = questions.filter(question => question.id !== id);
    const newDb = {
      questions: remainQuestions,
      categories,
      sources
    };
    const newDbStringified = JSON.stringify(newDb);

    updateDatabase(newDbStringified);
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

  const context = {
    removeQuestion,
    turnOnEditMode
  };

  return (
    <div>
      <AppContext.Provider value={context}>
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
            sources={sources}
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

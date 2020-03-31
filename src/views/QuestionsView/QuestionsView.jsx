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
  const [changesInDatabase, setChangesInDatabase] = useState(false);
  const [editingQuestion, setEditingQuestion] = useState('');
  // const categories = [
  //   { name: 'JS', topics: ['Data types', 'Hooki', 'Tablice'] },
  //   { name: 'HTML', topics: ['Browser', 'Komendy'] },
  //   { name: 'GIT', topics: ['Gałęzie', 'Commends'] },
  //   { name: 'React', topics: ['Tablice', 'Other'] }
  // ];

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
        console.log('Document written');
      })
      .then(setChangesInDatabase(false))
      .catch(function(error) {
        console.error('Error adding document: ', error);
      });
  };

  useEffect(() => {
    console.log('jestes w useEffect');

    getAllQuestionsFromServerAsString();

    // return () => stopConnection();
  }, [changesInDatabase]);

  const toggleFormVisibility = () => {
    setFormVisibility(!isFormVisible);
  };

  const addNewQuestion = newQuestion => {
    const allQuestions = [...questions, newQuestion];
    const allQuestionsStringyfied = JSON.stringify(allQuestions);

    const tempCategories = categories;
    const tempSources = sources;

    const newDb = {
      questions: allQuestions,
      categories: tempCategories,
      sources: tempSources
    };
    console.log('newDB: ');
    console.log(newDb);

    const newDbStringified = JSON.stringify(newDb);

    console.log(newDbStringified);

    const docRef = firebaseApp.collection('questionsString').doc('1');

    firebaseApp
      .runTransaction(transaction => {
        return transaction.get(docRef).then(doc => {
          if (!doc.exists) {
            throw 'Document does not exist!';
          }

          transaction.set(docRef, { categoriesAndQuestions: newDbStringified });
          return newDbStringified;
        });
      })
      .then(dbQuestions => JSON.parse(dbQuestions))
      .then(dbQuestions => {
        console.log(dbQuestions);
        setQuestion(dbQuestions.questions);
        setCategories(dbQuestions.categories);
        setSources(dbQuestions.sources);
      })
      .then(function() {
        console.log('Document written');
      })
      .catch(function(error) {
        console.error('Error adding document: ', error);
      });

    // firebaseApp
    //   .collection('questionsString')
    //   .doc('1')
    //   .set({
    //     categoriesAndQuestions: newDbStringified
    //   })
    //   .then(function() {
    //     console.log('Document written');
    //   })
    //   .then(setChangesInDatabase(true))
    //   .catch(function(error) {
    //     console.error('Error adding document: ', error);
    //   });
  };

  const editQuestion = editedQuestion => {
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

    const tempCategories = categories;
    const tempSources = sources;

    const newDb = {
      questions: newQuestions,
      categories: tempCategories,
      sources: tempSources
    };
    console.log('newDB: ');
    console.log(newDb);

    const newDbStringified = JSON.stringify(newDb);

    console.log(newDbStringified);

    firebaseApp
      .collection('questionsString')
      .doc('1')
      .set({
        categoriesAndQuestions: newDbStringified
      })
      .then(function() {
        console.log('Document written');
      })
      .then(setChangesInDatabase(true))
      .catch(function(error) {
        console.error('Error adding document: ', error);
      });

    // firebaseApp
    //   .collection('questionsString')
    //   .doc('1')
    //   .set({
    //     all: allQuestionsStringyfied
    //   })
    //   .then(function() {
    //     console.log('Document written');
    //   })
    //   .then(setChangesInDatabase(true))
    //   .catch(function(error) {
    //     console.error('Error adding document: ', error);
    //   });

    setEditMode(false);
  };

  const removeQuestion = id => {
    const remainQuestions = questions.filter(question => question.id !== id);

    const remainQuestionsStringyfied = JSON.stringify(remainQuestions);

    const tempCategories = categories;
    const tempSources = sources;

    const newDb = {
      questions: remainQuestions,
      categories: tempCategories,
      sources: tempSources
    };
    console.log('newDB: ');
    console.log(newDb);

    const newDbStringified = JSON.stringify(newDb);

    console.log(newDbStringified);

    firebaseApp
      .collection('questionsString')
      .doc('1')
      .set({
        categoriesAndQuestions: newDbStringified
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

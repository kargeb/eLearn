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
    // const dbData = {
    //   categories: [
    //     {
    //       name: 'JS',
    //       topics: ['Data types', 'Hooki', 'Tablice', 'PIES']
    //     },
    //     {
    //       name: 'HTML',
    //       topics: ['Browser', 'Komendy']
    //     },
    //     {
    //       name: 'GIT',
    //       topics: ['Gałęzie', 'Commends']
    //     },
    //     {
    //       name: 'React',
    //       topics: ['Tablice', 'Other']
    //     }
    //   ],
    //   questions: [
    //     {
    //       question: 'jak otworzyc pusta strone w chrome',
    //       answer: 'about:blank',
    //       category: 'HTML',
    //       topic: 'Browser',
    //       source: 'samuraj',
    //       id: 1582808702000
    //     },
    //     {
    //       question: 'efekt poelcenia: typeof null',
    //       answer: 'object - oficjlany błąd JSowy, NULL jest typu NULL',
    //       category: 'JS',
    //       topic: 'Data types',
    //       source: 'samuraj',
    //       id: 1582808703000
    //     },
    //     {
    //       question: 'Co to master',
    //       answer:
    //         'Domyślan zawza pierwszej gałęzi repo gita, NIE POWINNO SIĘ JEJ ZMINIAC',
    //       category: 'GIT',
    //       topic: 'Gałęzie',
    //       source: 'devstyle',
    //       id: 1582808905000
    //     },
    //     {
    //       question: 'jakis nowy cos',
    //       answer: 'react cos cowkolei',
    //       category: 'React',
    //       topic: 'Tablice',
    //       source: 'ModernJS',
    //       id: 1585215341329
    //     },
    //     {
    //       question: 'nowe cos',
    //       answer: 'cos cos',
    //       category: 'JS',
    //       topic: 'Tablice',
    //       source: 'Samuraj',
    //       id: 1585407115966
    //     },
    //     {
    //       question: 'PIESSSSS',
    //       answer: 'CZOSZSZ',
    //       category: 'HTML',
    //       topic: 'Komendy',
    //       source: 'Samuraj',
    //       id: 1585464514834
    //     },
    //     {
    //       question: 'DO JS',
    //       answer: 'DO TABLIC',
    //       category: 'JS',
    //       topic: 'Tablice',
    //       source: 'ModernJS',
    //       id: 1585465262639
    //     },
    //     {
    //       question: 'sdf',
    //       answer: 'sdf',
    //       category: 'HTML',
    //       topic: 'Tablice',
    //       source: 'Samuraj',
    //       id: 1585462902970
    //     },
    //     {
    //       question: 'pies',
    //       answer: 'hał',
    //       category: 'HTML',
    //       topic: 'Komendy',
    //       source: 'Doc',
    //       id: 1585463086543
    //     }
    //   ]
    // };

    // console.log(dbData);

    // const stringed = JSON.stringify(dbData);

    // console.log(stringed);

    // const parsed = JSON.parse(stringed);

    // console.log(parsed);

    // console.log(JSON.parse(stringed)

    firebaseApp
      .collection('questionsString')
      .doc('1')
      .get()
      .then(doc => doc.data().categoriesAndQuestions)
      .then(dbQuestions =>
        // console.log(dbQuestions);
        // const parsed = JSON.parse(dbQuestions);
        JSON.parse(dbQuestions)
      )
      .then(allQuestions => {
        console.log(allQuestions);
        console.log(allQuestions.categories);
        console.log(allQuestions.questions);

        const questionss = allQuestions.questions;
        const categoriess = allQuestions.categories;

        const newObj = {
          questionss,
          categoriess
        };

        console.log(newObj);

        console.log(JSON.stringify(newObj));
      });
    // .then(objQuestions => console.log(objQuestions.quesiotns));
    // // .then(allQuestionsJSON => setQuestion(allQuestionsJSON))
    // .then(console.log('pobrane'));
    // categoriesAndQuestions
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

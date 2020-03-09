import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../components/atoms/logo/Logo';
// import data from '../../assets/dummyData/questions';
import Question from '../../components/molecules/Question/Question';
import Button from '../../components/atoms/buttons/Button';
import NewQuestionForm from '../../components/organisms/NewQuestionForm/NewQuestionForm';
import Icon from '../../components/atoms/icons/Icon';
import plusIcon from '../../assets/images/PlusIcon.svg';
import firebaseApp from '../../fbase';

const StyledAddQuestionButton = styled.div`
  position: fixed;
  bottom: 100px;
  right: 100px;
`;

const QuestionsView = () => {
  // console.log(`data z apki ${data}`);

  const [isFormVisible, setFormVisibility] = useState(false);
  const [questions, setQuestion] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editingQuestion, setEditingQuestion] = useState('');

  const getQuestions = () => {
    firebaseApp
      .collection('questions')
      .orderBy('id')
      .get()
      .then(querySnapshot => {
        const data = [];

        querySnapshot.forEach(doc => {
          console.log(doc.data());
          data.push(doc.data());
        });
        return data;
      })
      .then(data => {
        console.log('przed setQestions w useEffect');
        setQuestion(data);
      });
  };

  useEffect(() => {
    console.log('jestes w useEffect');

    getQuestions();
  }, [isFormVisible]);

  const toggleFormVisibility = () => {
    setFormVisibility(!isFormVisible);
  };

  const addNewQuestion = newQuestion => {
    console.log(newQuestion);

    // setQuestion(prevState => [...prevState, newQuestion]);

    const { question, answer, category, topic, source, id } = newQuestion;

    // const idString = id.toString();

    firebaseApp
      .collection('questions')
      .doc(id.toString())
      .set({
        question,
        answer,
        category,
        topic,
        source,
        id
      })
      .then(function(docRef) {
        console.log('Document written with ID: ', docRef.id);
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
    console.log(pointedQuestions[0].id);

    const toDelete = pointedQuestions[0].id.toString();

    firebaseApp
      .collection('questions')
      .doc(toDelete)
      .delete()
      .then(function() {
        console.log('Document successfully deleted!');
      })
      .then(getQuestions())
      .catch(function(error) {
        console.error('Error removing document: ', error);
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

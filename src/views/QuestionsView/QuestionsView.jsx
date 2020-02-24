import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../components/logo/Logo';
import data from '../../assets/dummyData/questions';
import Question from '../question/Question';

const QuestionsView = () => (
  <div>
    <Link to="/">
      <Logo />
    </Link>
    <h3>jestem w questions view</h3>
    {console.log(data)}
    <ul>
      {data.map(question => (
        <Question key={question.id} item={question} />
      ))}
    </ul>
  </div>
);

export default QuestionsView;

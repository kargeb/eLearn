import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../components/atoms/logo/Logo';
import data from '../../assets/dummyData/questions';
import Question from '../../components/molecules/Question/Question';

const QuestionsView = () => (
  <div>
    <Link to="/">
      <Logo small />
    </Link>
    <ul>
      {data.map(question => (
        <Question key={question.id} item={question} />
      ))}
    </ul>
  </div>
);

export default QuestionsView;

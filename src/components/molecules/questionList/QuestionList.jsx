import React from 'react';
import PropTypes from 'prop-types';
import Question from '../Question/Question';

const QuestionList = ({ questionsToShow }) => (
  <ul>
    {questionsToShow.map((question, index) => (
      <li key={question.id}>
        <Question index={index} item={question} />
      </li>
    ))}
  </ul>
);

QuestionList.propTypes = {
  questionsToShow: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default QuestionList;

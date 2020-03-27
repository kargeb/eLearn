import React from 'react';
import styled from 'styled-components';
import Question from '../Question/Question';

const QuestionList = ({ questionsToShow }) => (
  <ul>
    {questionsToShow.map((question, index) => (
      <li>
        <Question key={question.id} index={index} item={question} />
      </li>
    ))}
  </ul>
);

export default QuestionList;

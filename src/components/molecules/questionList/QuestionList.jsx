// import React, { useRef, useEffect } from 'react';
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Question from '../Question/Question';

// const QuestionList = ({ questionsToShow, getScrollHeight }) => {
const QuestionList = ({ questionsToShow }) => {
  const content = useRef(null);

  // useEffect(() => {
  //   getScrollHeight(content.current.scrollHeight);

  //   if (questionsToShow[0]) {
  //     console.log(questionsToShow[0].topic);
  //   }
  // }, [questionsToShow]);

  return (
    // <ul ref={content}>
    <ul ref={content}>
      {questionsToShow.map((question, index) => (
        <li key={question.id}>
          <Question index={index} item={question} />
        </li>
      ))}
    </ul>
  );
};

QuestionList.propTypes = {
  questionsToShow: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default QuestionList;

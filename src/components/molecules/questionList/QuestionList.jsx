import React, { useRef, useEffect, useState } from 'react';
// import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Question from '../Question/Question';

// const QuestionList = ({ questionsToShow, getScrollHeight }) => {
const QuestionList = ({ questionsToShow, getScrollHeight }) => {
  const content = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    // console.log(questionsToShow[0].topic);
    // console.log(content.current.scrollHeight);
    // getScrollHeight(questionsToShow[0].topic, content.current.scrollHeight);
    setHeight(content.current.scrollHeight);
  }, [questionsToShow.length]);

  // useEffect(() => {
  //   if (questionsToShow[0]) {
  //     console.log(questionsToShow[0].topic);
  //   }

  //   console.log(height);

  //   console.log(content.current.scrollHeight);
  // }, [height]);

  // getScrollHeight(questionsToShow[0].topic, height);
  return (
    <ul ref={content}>
      {height}
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

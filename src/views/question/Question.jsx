import React from 'react';
// import data from '../../assets/dummyData/questions';

// const first = data[0];

const Question = ({ item }) => {
  const { question, answer, topic } = item;

  return (
    <div>
      <h2>{question}</h2>
      <h3>{answer}</h3>
      <code>{topic}</code>
    </div>
  );
};

export default Question;

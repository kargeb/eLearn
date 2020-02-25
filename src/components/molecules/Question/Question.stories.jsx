import React from 'react';
import Question from './Question';
import data from '../../../assets/dummyData/questions';

export default {
  title: 'Molecules',
  component: Question
};

export const question = () => <Question item={data[0]} />;

import React from 'react';
import Category from './Category';
import data from '../../../assets/dummyData/questions';

export default {
  title: 'Molecules',
  component: Category
};

export const category = () => {
  const category = 'react';
  const amount = 123;

  return <Category category={category} amount={amount} />;
};

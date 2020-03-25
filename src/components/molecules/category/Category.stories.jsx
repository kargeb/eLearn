import React from 'react';
import Category from './Category';
import data from '../../../assets/dummyData/questions';

export default {
  title: 'Molecules',
  component: Category
};

export const category = () => <Category item={data[0]} />;

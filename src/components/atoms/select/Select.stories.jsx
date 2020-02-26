import React from 'react';
import Select from './Select';

export default {
  title: 'atoms'
};

export const select = () => {
  const options = ['JavaScript', 'HTML', 'GIT', 'React'];

  return <Select category="Kategoria" options={options} />;
};

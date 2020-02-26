import React, { useState } from 'react';
import Input from './Input';

export default {
  title: 'atoms',
  component: Input
};

export const CustomInput = () => {
  const [state, setState] = useState('');

  return (
    <Input
      label="Pytanie :"
      name="qestionInput"
      gotValue={state}
      setValue={setState}
    />
  );
};

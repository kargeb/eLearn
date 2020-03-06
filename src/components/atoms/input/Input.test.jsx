import React, { useState } from 'react';
import { render, fireEvent } from '@testing-library/react';
import Input from './Input';

it('Renders input', () => {
  const labelText = 'Pytanie';

  //   const [state, setState] = useState('');

  const { getByLabelText } = render(
    <Input
      label={labelText}
      name="questionInput"
      //   gotValue={state}
      //   setValue={e => e.target.value}
    />
  );

  const input = getByLabelText('Pytanie');

  expect(input).toBeInTheDocument();

  //   fireEvent.change(input, { target: { value: 'Pies' } });

  //   expect(input).toHaveValue('Pies');
});

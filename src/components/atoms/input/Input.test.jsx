import React, { useState } from 'react';
import { render, fireEvent } from '@testing-library/react';
import Input from './Input';

// const RenderInput = props => {
//   const [state, setState] = useState('');
//   const labelText = 'Pytanie';
//   const utils = render(
//     <Input
//       label={labelText}
//       name="questionInput"
//       gotValue={state}
//       setValue={e => setState(e.target.value)}
//       {...props}
//     />
//   );

//   const input = utils.getByLabelText(labelText);

//   return { ...utils, input };
// };

describe('Input testing', () => {
  //   it('input rendered test', () => {
  //     const { input } = <RenderInput />;
  //     expect(input).toBeInTheDocument();
  //   });

  it('Renders input', () => {
    const labelText = 'Pytanie';

    const { getByLabelText } = render(
      <Input label={labelText} name="questionInput" />
    );

    const input = getByLabelText('Pytanie');
    //   const showedInput = container.querySelector('#questionInput');
    console.log(input.innerHTML);
    expect(input).toBeInTheDocument();

    //   fireEvent.change(input, { target: { value: 'Pies' } });
    //   expect(input).toHaveValue('Piess');
  });
});

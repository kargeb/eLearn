import React, { useState } from 'react';
import styled from 'styled-components';
import Label from '../atoms/label/Label';

const StyledSelect = styled.select`
  width: 150px;
  background-color: rgba(196, 196, 196, 0.2);
  height: 35px;

  option {
    background-color: rgba(196, 196, 196, 0.2);
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  margin: 10px;
`;

const useDropdown = (label, options, defaultState) => {
  const [state, setState] = useState(defaultState);

  const id = `useDropdown-${label}`;

  const Dropdown = () => (
    <StyledWrapper>
      <Label select htmlFor={id}>
        {label}:
      </Label>
      <StyledSelect
        id={id}
        value={state}
        onChange={e => setState(e.target.value)}
      >
        <option disabled hidden>
          {' '}
        </option>
        {options.map(option => (
          <option key={option}>{option}</option>
        ))}
      </StyledSelect>
    </StyledWrapper>
  );

  return [state, Dropdown, setState];
};

export default useDropdown;

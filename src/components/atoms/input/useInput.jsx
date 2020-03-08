import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  margin: 10px;
`;

const StyledLabel = styled.label`
  width: 120px;
  font-size: 20px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
`;

const StyledInput = styled.textarea`
  width: 1000px;
  height: 150px;
  color: black;
  background-color: rgba(196, 196, 196, 0.2);

  &:focus {
    background-color: rgba(210, 246, 193, 0.5);
  }
`;

const useInput = (label, defaultState) => {
  const [state, setState] = useState(defaultState);

  const id = `use-Input-${label}`;

  useEffect(() => {
    console.log('usedhgdjhdg sdsd ');
  }, []);

  const HookInput = () => {
    return (
      <div>
        <label htmlFor={id}>{label}</label>
        <textarea
          //   ref={refProp}
          id={id}
          type="text"
          //   name={id}
          value={state}
          onChange={e => setState(e.target.value)}
        />
      </div>
    );
  };

  return [state, HookInput, setState];
};

export default useInput;

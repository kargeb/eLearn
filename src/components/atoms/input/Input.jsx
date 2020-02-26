import React from 'react';
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

const Input = ({ label, name, gotValue, setValue }) => {
  return (
    <StyledWrapper>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledInput
        id={name}
        type="text"
        name={name}
        value={gotValue}
        onChange={e => setValue(e.target.value)}
      />
    </StyledWrapper>
  );
};

export default Input;

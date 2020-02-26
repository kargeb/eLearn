import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  margin: 10px;
  /* background-color: blue; */
`;

const StyledLabel = styled.label`
  width: 120px;
  font-size: 20px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  padding: 5px;
  text-align: right;
  padding-right: 20px;
`;

const StyledSelect = styled.select`
  width: 150px;
  background-color: rgba(196, 196, 196, 0.2);
  height: 35px;
`;

const StyledOption = styled.option`
  background-color: rgba(196, 196, 196, 0.2);
`;

const Select = ({ category, options, gotValue, setValue }) => {
  return (
    <StyledWrapper>
      <StyledLabel htmlFor={category}>{category}:</StyledLabel>
      <StyledSelect
        id={category}
        value={gotValue}
        onChange={e => setValue(e.target.value)}
      >
        {options.map(option => (
          <StyledOption key={option}>{option}</StyledOption>
        ))}
      </StyledSelect>
    </StyledWrapper>
  );
};

export default Select;

{
  /* <select value={this.state.value} onChange={this.handleChange}> */
}

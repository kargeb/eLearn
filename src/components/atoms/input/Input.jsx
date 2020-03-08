import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Label from '../label/Label';
import TextArea from './TextArea';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
  width: 100%;
`;

const Input = ({ label, name, gotValue, setValue, refProp }) => {
  return (
    <StyledWrapper>
      <Label htmlFor={name}>{label}</Label>
      <TextArea
        ref={refProp}
        id={name}
        type="text"
        name={name}
        value={gotValue}
        onChange={e => setValue(e.target.value)}
      />
    </StyledWrapper>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  gotValue: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  refProp: PropTypes.objectOf(PropTypes.shape())
};

Input.defaultProps = {
  refProp: null
};

export default Input;

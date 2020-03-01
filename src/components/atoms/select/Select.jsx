import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from '../icons/Icon';
import plusIcon from '../../../assets/images/PlusIcon.svg';
import Input from '../input/Input';

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

const StyledIcon = styled(Icon)`
  margin-top: 8px;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const StyledAddSelectForm = styled.div`
  position: absolute;
  padding: 20px;
  width: 600px;
  height: 300px;
  top: 100px;
  left: calc(50% - 300px);
  z-index: 200;
  background-color: white;
  border: 2px grey solid;
`;

const StyledList = styled.ul`
  list-style-type: square;
  margin: 10px 25px;
  font-size: 16px;
`;

const Select = ({ category, options, gotValue, setValue, addOption }) => {
  const [isNewCategoryFormVisible, setNewCategoryFormVisibility] = useState(
    false
  );

  const [newOption, setNewOption] = useState('');

  const HandleAddOption = () => {
    addOption(category, newOption);
  };

  const toggleNewCategoryForm = () => {
    setNewCategoryFormVisibility(!isNewCategoryFormVisible);
  };

  return (
    <StyledWrapper>
      <StyledLabel htmlFor={category}>{category}:</StyledLabel>
      <StyledSelect
        tabIndex={gotValue ? '-1' : '0'}
        id={category}
        value={gotValue}
        onChange={e => setValue(e.target.value)}
      >
        {/* <StyledOption disabled hidden /> */}
        {console.log(options)}
        {options.map(option => (
          <StyledOption key={option}>{option}</StyledOption>
        ))}
      </StyledSelect>
      <StyledIcon
        horizontalGap
        icon={plusIcon}
        onClick={toggleNewCategoryForm}
      />
      {isNewCategoryFormVisible && (
        <StyledAddSelectForm>
          <StyledLabel>{category}</StyledLabel>
          <StyledList>
            {options.map(option => (
              <li key={option}>{option}</li>
            ))}
          </StyledList>
          <Input
            label="Noww wpis: "
            name="newOption"
            gotValue={newOption}
            setValue={setNewOption}
          />
          <button type="button" onClick={HandleAddOption}>
            Dodaj
          </button>
          <button type="button" onClick={toggleNewCategoryForm}>
            Zamknij
          </button>
        </StyledAddSelectForm>
      )}
    </StyledWrapper>
  );
};

Select.propTypes = {
  category: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  gotValue: PropTypes.string,
  setValue: PropTypes.func
};

Select.defaultProps = {
  gotValue: '',
  setValue: null
};

export default Select;

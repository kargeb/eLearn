import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from '../icons/Icon';
import plusIcon from '../../../assets/images/PlusIcon.svg';
import Input from '../input/Input';
import Label from '../label/Label';

const StyledWrapper = styled.div`
  display: flex;
  margin: 10px;
`;

const StyledSelect = styled.select`
  width: 150px;
  background-color: rgba(100, 196, 196, 0.2);
  height: 35px;

  option {
    background-color: rgba(196, 196, 196, 0.2);
  }
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
      <Label select htmlFor={category}>
        {category}:
      </Label>
      <StyledSelect
        tabIndex={gotValue ? '-1' : '0'}
        id={category}
        value={gotValue}
        onChange={e => setValue(e.target.value)}
      >
        <option disabled hidden>
          {' '}
        </option>
        {options.map(option => (
          <option key={option}>{option}</option>
        ))}
      </StyledSelect>
      <Icon
        select
        horizontalGap
        icon={plusIcon}
        onClick={toggleNewCategoryForm}
      />
      {isNewCategoryFormVisible && (
        <StyledAddSelectForm>
          <Label select>{category}</Label>
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
  setValue: PropTypes.func,
  addOption: PropTypes.func
};

Select.defaultProps = {
  gotValue: '',
  setValue: null,
  addOption: () => {}
};

export default Select;

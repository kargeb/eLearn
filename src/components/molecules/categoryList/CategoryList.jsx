import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import TopicList from '../topicList/TopicList';

const StyledWrapper = styled.div`
  margin: 10px auto;
  width: 80vw;
  min-height: 50px;
  display: flex;
  background-color: #e5e6e5;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

const StyledLabel = styled.div`
  width: 100px;
  font-family: Roboto;
  font-weight: 900;
  font-size: 18px;
  padding-left: 30px;
  text-transform: capitalize;
`;

const StyledNumber = styled.div`
  background-color: white;
  font-family: Roboto;
  font-weight: 900;
  font-size: 18px;
  width: 30px;
  padding: 5px 10px;
`;

const StyledAccordion = styled.div`
  max-height: 0px;
  overflow: hidden;
  transition: max-height 0.5s ease;

  ${({ open }) =>
    open &&
    css`
      max-height: 1000px;
    `}
`;

const CategoryList = ({ questions, categories, removeQuestion }) => {
  const [open, setOpen] = useState([]);

  const handleClick = e => {
    const currentElement = e.currentTarget.id;

    if (open.includes(currentElement)) {
      const newOpens = open.filter(item => item !== currentElement);
      setOpen(newOpens);
    } else setOpen(prevState => [...prevState, currentElement]);
  };

  return (
    <ul>
      {categories.map(category => {
        const questionsFilteredByCategory = questions.filter(
          question => question.category === category.name
        );

        return (
          <li key={category.name}>
            <StyledWrapper onClick={handleClick} id={category.name}>
              <StyledLabel>{category.name}</StyledLabel>
              <StyledNumber>{questionsFilteredByCategory.length}</StyledNumber>
            </StyledWrapper>

            <StyledAccordion open={open.includes(category.name)}>
              <TopicList
                removeQuestion={removeQuestion}
                questionsFilteredByCategory={questionsFilteredByCategory}
                categoryTopics={category.topics}
              />
            </StyledAccordion>
          </li>
        );
      })}
    </ul>
  );
};

CategoryList.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object),
  categories: PropTypes.arrayOf(PropTypes.object)
};

CategoryList.defaultProps = {
  questions: [{}],
  categories: [{}]
};

export default CategoryList;

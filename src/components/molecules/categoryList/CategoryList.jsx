import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import TopicList from '../topicList/TopicList';

const StyledWrapper = styled.div`
  margin: 10px auto;
  width: 80vw;
  min-height: 50px;
  display: flex;
  background-color: #e5e6e5;
  align-items: center;
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
  /* background-color: pink; */
  max-height: 0px;
  overflow: hidden;
  transition: max-height 0.5s;

  ${({ open }) =>
    open &&
    css`
      max-height: 500px;
    `}
`;

const CategoryList = ({ questions, categories }) => {
  const [open, setOpen] = useState([]);

  const handleClick = e => {
    const currentElement = e.target.id;
    console.log(currentElement);

    if (open.includes(currentElement)) {
      console.log('opens includes to juz');
      const newOpens = open.filter(item => item != currentElement);
      console.log(`newOpens w ifie ${newOpens}`);
      setOpen(newOpens);
    } else setOpen(prevState => [...prevState, currentElement]);

    // setOpen(prevState => [...prevState, currentElement]);
    console.log(`w open ${open}`);
  };

  return (
    <ul>
      {categories.map(category => {
        const questionsFilteredByCategory = questions.filter(
          question => question.category == category.name
        );

        return (
          <li>
            <StyledWrapper onClick={handleClick} id={category.name}>
              <StyledLabel>{category.name}</StyledLabel>
              <StyledNumber>{questionsFilteredByCategory.length}</StyledNumber>
            </StyledWrapper>
            {open.includes(category.name) ? (
              <StyledAccordion open>
                <TopicList
                  questionsFilteredByCategory={questionsFilteredByCategory}
                  categoryTopics={category.topics}
                />
              </StyledAccordion>
            ) : (
              <StyledAccordion>
                <TopicList
                  questionsFilteredByCategory={questionsFilteredByCategory}
                  categoryTopics={category.topics}
                />
              </StyledAccordion>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default CategoryList;

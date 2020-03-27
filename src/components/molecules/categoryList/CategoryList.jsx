import React from 'react';
import styled from 'styled-components';
import TopicList from '../topicList/TopicList';

const StyledWrapper = styled.div`
  margin: 10px auto;
  width: 80vw;
  min-height: 50px;
  display: flex;
  background-color: #e5e6e5;
  align-items: center;
`;

const StyledTopicWrapper = styled(StyledWrapper)`
  margin-left: 250px;
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

const CategoryList = ({ questions, categories }) => (
  <ul>
    {categories.map(category => {
      const questionsFilteredByCategory = questions.filter(
        question => question.category == category.name
      );

      return (
        <li>
          <StyledWrapper>
            <StyledLabel>{category.name}</StyledLabel>
            <StyledNumber>{questionsFilteredByCategory.length}</StyledNumber>
            {console.log(`filteredByCategopry ${questionsFilteredByCategory}`)}
            {console.log(`category topics ${category.topics}`)}
          </StyledWrapper>
          <TopicList
            questionsFilteredByCategory={questionsFilteredByCategory}
            categoryTopics={category.topics}
          />
        </li>
      );
    })}
  </ul>
);

export default CategoryList;

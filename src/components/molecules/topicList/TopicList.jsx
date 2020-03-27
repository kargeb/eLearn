import React from 'react';
import styled from 'styled-components';
import Question from '../Question/Question';
import QuestionList from '../questionList/QuestionList';

const StyledWrapper = styled.div`
  /* margin: 10px auto 10px 250px; */
  /* width: calc(80vw - 150px); */
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

const StyledContainer = styled.ul`
  width: 80%;
  margin-left: 250px;
`;

const TopicList = ({ questionsFilteredByCategory, categoryTopics }) => (
  <StyledContainer>
    {categoryTopics.map(topic => {
      const questionsFilteredByTopic = questionsFilteredByCategory.filter(
        question => question.topic == topic
      );

      return (
        <li>
          <StyledWrapper>
            <StyledLabel>{topic}</StyledLabel>
            <StyledNumber>{questionsFilteredByTopic.length}</StyledNumber>
          </StyledWrapper>
          <QuestionList questionsToShow={questionsFilteredByTopic} />
        </li>
      );
    })}
  </StyledContainer>
);

export default TopicList;

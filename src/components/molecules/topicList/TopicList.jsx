import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.li`
  margin: 10px auto 10px 250px;
  width: calc(80vw - 150px);
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

const TopicList = ({ questionsFilteredByCategory, categoryTopics }) => (
  <ul>
    {categoryTopics.map(topic => {
      const filteredByTopic = questionsFilteredByCategory.filter(
        question => question.topic == topic
      );

      return (
        <StyledWrapper>
          <StyledLabel>{topic}</StyledLabel>
          <StyledNumber>{filteredByTopic.length}</StyledNumber>
        </StyledWrapper>
      );
    })}
  </ul>
);

export default TopicList;

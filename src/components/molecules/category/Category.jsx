import React from 'react';
import styled from 'styled-components';
import Question from '../Question/Question';

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

const Category = ({ category, amount, questions }) => (
  <div>
    <StyledWrapper>
      <StyledLabel>{category.name}</StyledLabel>
      <StyledNumber>{amount}</StyledNumber>
    </StyledWrapper>
    <ul>
      {/* {questions.map((question, index) => (
        <Question key={question.id} index={index} item={question} />
      ))} */}
      {/* {questions.map(topic => {

        const filteredByTopic = questions.filter(
            question => question.topic == category.topic
          );

      })} */}
      {/* {console.log(`categroy topic: ${category.topics}`)}; */}
      {category.topics.map(topic => {
        const filteredByTopic = questions.filter(
          question => question.topic == topic
        );

        {
          /* console.log(`filteredByTopic: ${filteredByTopic}`); */
        }
        return (
          <>
            <StyledTopicWrapper>
              <StyledLabel>{topic}</StyledLabel>
              <StyledNumber>{filteredByTopic.length}</StyledNumber>
            </StyledTopicWrapper>
            <ul>
              {filteredByTopic.map((question, index) => (
                <Question key={question.id} index={index} item={question} />
              ))}
            </ul>
          </>
        );
      })}
    </ul>
  </div>
);

export default Category;

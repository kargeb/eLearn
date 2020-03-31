import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import QuestionList from '../questionList/QuestionList';

const StyledWrapper = styled.div`
  margin: 10px auto;
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

const StyledContainer = styled.ul`
  width: 80%;
  margin-left: 250px;
`;

const StyledAccordion = styled.div`
  max-height: 0px;
  /* height: ${({ height }) => height}; */
  overflow: hidden;
  /* transition: max-height 0.5s; */

  ${({ open }) =>
    open &&
    css`
      max-height: 100000px;
    `}
`;

const TopicList = ({ questionsFilteredByCategory, categoryTopics }) => {
  const [open, setOpen] = useState([]);
  // const [scrlHeight, setScrlHeight] = useState();

  // const content = useRef(null);

  const handleClick = e => {
    const currentElement = e.currentTarget.id;
    if (open.includes(currentElement)) {
      const newOpens = open.filter(item => item !== currentElement);
      setOpen(newOpens);
    } else setOpen(prevState => [...prevState, currentElement]);
  };

  const getScrollHeight = (currentTopic, scrollHeight) => {
    console.log('from topic list:');
    console.log(currentTopic);
    console.log(scrollHeight);
    // setScrlHeight(scrollHeight);
  };

  return (
    <StyledContainer>
      {categoryTopics.map(topic => {
        const questionsFilteredByTopic = questionsFilteredByCategory.filter(
          question => question.topic === topic
        );

        return (
          <li key={topic}>
            {/* {questionsFilteredByTopic.length ? (
              <> */}
            <StyledWrapper onClick={handleClick} id={topic}>
              <StyledLabel>{topic}</StyledLabel>
              <StyledNumber>{questionsFilteredByTopic.length}</StyledNumber>
            </StyledWrapper>
            <StyledAccordion open={open.includes(topic)}>
              <QuestionList
                questionsToShow={questionsFilteredByTopic}
                getScrollHeight={getScrollHeight}
              />
            </StyledAccordion>
            {/* </>
            ) : (
              <span> </span>
            )} */}
          </li>
        );
      })}
    </StyledContainer>
  );
};

TopicList.propTypes = {
  questionsFilteredByCategory: PropTypes.arrayOf(PropTypes.object).isRequired,
  categoryTopics: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default TopicList;

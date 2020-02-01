import React from 'react';
import './MainPage.css';
import styled from 'styled-components';
import Question from '../../components/question/Question';
import GlobalStyle from '../../theme/GlobalStyles';

const StyledButton = styled.button`
  background-color: white;
  border: 1px solid black;
  padding: 10px 20px;
`;

function MainPage() {
  return (
    <div>
      <GlobalStyle />
      <h1>Jest</h1>
      <hr />
      <StyledButton>Button Styled</StyledButton>
      <h2>przegląd pytań </h2>
      <Question />
    </div>
  );
}

export default MainPage;

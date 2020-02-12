import React from 'react';
import styled from 'styled-components';
import './MainPage.css';
import GlobalStyle from '../../theme/GlobalStyles';
import Logo from '../../components/logo/Logo';
import MenuButton from '../../components/buttons/MenuButton';

const StyledButtonWrapper = styled.div`
  /* display: inline-block; */
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  /* height: 400px; */
  /* justify-content: space-between; */
`;

function MainPage() {
  return (
    <div>
      <GlobalStyle />
      <Logo />
      <StyledButtonWrapper>
        <MenuButton>Baza Pytań</MenuButton>
        <MenuButton>Testy</MenuButton>
        <MenuButton>Statystyki</MenuButton>
      </StyledButtonWrapper>
    </div>
  );
}

export default MainPage;

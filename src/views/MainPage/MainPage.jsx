import React from 'react';
import styled from 'styled-components';
import './MainPage.css';
import { Link } from 'react-router-dom';
import Logo from '../../components/logo/Logo';
import MenuButton from '../../components/buttons/MenuButton';

const StyledButtonWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function MainPage() {
  return (
    <div>
      <Link to="/">
        <Logo />
      </Link>
      <StyledButtonWrapper>
        <Link to="/questions">
          <MenuButton>Baza Pytań</MenuButton>
        </Link>
        <Link to="/tests">
          <MenuButton>Testy</MenuButton>
        </Link>
        <Link to="/stats">
          <MenuButton>Statystyki</MenuButton>
        </Link>
      </StyledButtonWrapper>
    </div>
  );
}

export default MainPage;

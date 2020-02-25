import React from 'react';
import styled from 'styled-components';
import './MenuView.css';
import { Link } from 'react-router-dom';
import Logo from '../../components/atoms/logo/Logo';
import MenuButton from '../../components/atoms/buttons/MenuButton';

const StyledButtonWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function MenuView() {
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

export default MenuView;

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
  margin-top: 20px;
`;

const StyledHeader = styled.header`
  margin-top: 20px;
  text-align: center;
`;

function MenuView() {
  return (
    <div>
      <StyledHeader>
        <Logo />
      </StyledHeader>
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

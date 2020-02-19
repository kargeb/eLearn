import styled from 'styled-components';

const MenuButton = styled.button`
  /* text-align: center; */
  position: relative;
  width: 550px;
  height: 100px;
  margin-top: 20px;
  font-family: Poiret One;
  font-style: normal;
  font-weight: normal;
  font-size: 60px;
  line-height: 70px;
  border: 2px solid #000000;
  background: #ffffff;
  border-radius: 16.7086px;
  outline: none;
  letter-spacing: 1px;
  transition: letter-spacing 0.1s;

  &:hover {
    color: #3de123;
    letter-spacing: 10px;
    cursor: pointer;
  }
`;

export default MenuButton;

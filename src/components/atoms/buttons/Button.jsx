import styled from 'styled-components';

const Button = styled.button`
  min-width: 150px;
  height: 60px;
  background-color: white;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 26px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  border: 2px solid black;
  padding: 5px 20px;
  transition: all 0.1s;

  &:hover,
  &:focus {
    background-color: #f3f3f3;
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export default Button;

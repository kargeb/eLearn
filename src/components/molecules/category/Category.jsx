import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  margin: 10px auto;
  width: 80vw;
  min-height: 50px;
  display: flex;
  background-color: #e5e6e5;
  align-items: center;
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

const Category = ({ category, amount }) => (
  <StyledWrapper>
    <StyledLabel>{category}</StyledLabel>
    <StyledNumber>{amount}</StyledNumber>
  </StyledWrapper>
);

export default Category;

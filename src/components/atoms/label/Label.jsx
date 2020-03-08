import styled, { css } from 'styled-components';

const Label = styled.label`
  width: 120px;
  font-size: 20px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;

  ${({ select }) =>
    select &&
    css`
      padding: 5px 20px 5px 5px;
      text-align: right;
    `};
`;

export default Label;

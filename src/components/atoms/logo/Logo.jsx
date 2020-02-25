import styled, { css } from 'styled-components';
import logoFull from '../../../assets/images/LogoFull.svg';

const Logo = styled.div`
  display: inline-block;
  margin: 25px 0 0 25px;
  width: 450px;
  height: calc(450px / 2.7);
  background-image: url(${logoFull});
  /* background-color: red; */
  background-repeat: no-repeat;
  background-size: contain;

  ${({ small }) =>
    small &&
    css`
      width: 260px;
      height: calc(260px / 2.7);
      margin-bottom: 50px;
    `}
`;

export default Logo;

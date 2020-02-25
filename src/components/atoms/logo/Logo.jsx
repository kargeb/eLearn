import styled, { css } from 'styled-components';
import logoFull from '../../../assets/images/LogoFull.svg';

const Logo = styled.div`
  margin: 25px 0 0 25px;
  width: 450px;
  height: calc(450px / 2.7);
  background-image: url(${logoFull});
  background-repeat: no-repeat;
  background-size: contain;

  ${({ small }) =>
    small &&
    css`
      width: 260px;
      height: calc(450px / 2.7);
    `}
`;

export default Logo;

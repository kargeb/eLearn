import styled from 'styled-components';
import logoFull from '../../assets/images/LogoFull.svg';

const logoWidth = '23vw';

const Logo = styled.div`
  margin: 25px 0 0 25px;
  width: ${logoWidth};
  height: calc(${logoWidth} / 2.7);
  background-image: url(${logoFull});
  background-repeat: no-repeat;
  background-size: contain;
`;

export default Logo;

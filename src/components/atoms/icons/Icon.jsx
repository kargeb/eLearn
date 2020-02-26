import styled, { css } from 'styled-components';

const Icon = styled.div`
  background-image: url(${props => props.icon});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 30px;
  height: 30px;

  ${({ horizontalGap }) =>
    horizontalGap &&
    css`
      margin-left: 10px;
    `}
`;

export default Icon;

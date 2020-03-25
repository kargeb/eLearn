import styled from 'styled-components';

const TextArea = styled.textarea`
  width: 50%;
  min-height: 50px;
  color: black;
  background-color: rgba(196, 196, 196, 0.2);

  &:focus {
    background-color: rgba(210, 246, 193, 0.5);
  }
`;

export default TextArea;

import styled from 'styled-components';

export const UploadLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 250px;
  cursor: pointer;
  border: 2px dashed black;
  border-radius: 6px;
  transition: all 200ms ease-out;
  svg {
    width: 100px;
  }
  input {
    display: none;
  }
  &:hover {
    color: rgba(0, 0, 0, 0.4);
    border-color: rgba(0, 0, 0, 0.4);
  }
`;

import styled from 'styled-components';

export const UploadWrapper = styled.div`
  display: flex;
  column-gap: 20px;
  justify-content: center;
`;

export const UploadLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
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

export const SwiperWrapper = styled.div`
  width: 50%;
  max-height: 300px;
`;

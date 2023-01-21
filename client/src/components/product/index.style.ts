import styled from 'styled-components';

export const ProductItemWrapper = styled.li`
  width: calc(33.3% - 2em);
  max-width: 310px;
  cursor: pointer;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 310px;
  object-fit: cover;
`;

export const Brand = styled.span`
  display: block;
  font-weight: 700;
  margin-bottom: 0.3em;
`;

export const ProductInfo = styled.p`
  margin-top: 0.5em;
  font-size: 0.9rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Amount = styled.span`
  font-weight: 800;
  font-size: 1.1rem;
  &::after {
    font-weight: 400;
    font-weight: 0.7em;
    content: '원';
  }
`;

import styled from 'styled-components';

export const ProductItemWrapper = styled.li`
  width: calc(35.4% - 2em);
  cursor: pointer;
  @media (max-width: 650px) {
    width: calc(51.1% - 1em);
  }
  @media (max-width: 400px) {
    width: 100%;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const Brand = styled.span`
  display: flex;
  justify-content: space-between;
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

export const ProductSecondInfo = styled(ProductInfo)`
  margin-top: 1em;
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

export const LikeCount = styled.span`
  margin-top: 0.5em;
  font-size: 10px;
  font-weight: bold;
  line-height: 15px;
  color: rgb(155, 155, 155);
`;

import styled, { css } from 'styled-components';

const skeletonCss = css`
  @keyframes skeleton-loading {
    0% {
      background-color: hsl(200, 20%, 80%);
    }
    100% {
      background-color: hsl(200, 20%, 95%);
    }
  }

  background-color: #e3e5e6;
  animation: skeleton-loading 600ms linear infinite alternate;
`;

export const ImageSkeleton = styled.div`
  ${skeletonCss}
  width: 100%;
  height: 301px;
`;

export const BrandSkeleton = styled.div`
  ${skeletonCss}
  margin-top: 0.5em;
  width: 20%;
  height: 16px;
`;

export const NameSkeleton = styled.div`
  ${skeletonCss}
  margin-top: 0.3em;
  width: 80%;
  height: 16px;
`;

export const AmountSkeleton = styled.div`
  ${skeletonCss}
  margin-top: 1em;
  width: 30%;
  height: 21px;
`;

export const LikeSkeleton = styled.div`
  ${skeletonCss}
  margin-top: 0.5em;
  width: 20%;
  height: 12px;
`;

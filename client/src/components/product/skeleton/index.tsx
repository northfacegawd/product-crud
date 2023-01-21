import {
  AmountSkeleton,
  BrandSkeleton,
  ImageSkeleton,
  LikeSkeleton,
  NameSkeleton,
  SkeletonWrapper,
} from './index.style';

export default function ProductItemSkeleton() {
  return (
    <SkeletonWrapper>
      <ImageSkeleton />
      <BrandSkeleton />
      <NameSkeleton />
      <AmountSkeleton />
      <LikeSkeleton />
    </SkeletonWrapper>
  );
}

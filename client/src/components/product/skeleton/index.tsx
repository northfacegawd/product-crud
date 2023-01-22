import {
  AmountSkeleton,
  BrandSkeleton,
  ImageSkeleton,
  LikeSkeleton,
  NameSkeleton,
} from './index.style';

export default function ProductItemSkeleton() {
  return (
    <li>
      <ImageSkeleton />
      <BrandSkeleton />
      <NameSkeleton />
      <AmountSkeleton />
      <LikeSkeleton />
    </li>
  );
}

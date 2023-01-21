import { PropsWithChildren } from 'react';

import { getEmptyArray, isEmptyArray } from '../../../libs/util';
import Empty from '../../common/empty';
import ProductItemSkeleton from '../skeleton';
import { ProductListWrapper } from './index.style';

interface ProductListProps {
  isLoading?: boolean;
}

export default function ProductList({
  isLoading,
  children,
}: PropsWithChildren<ProductListProps>) {
  if (isLoading) {
    return (
      <ProductListWrapper>
        {getEmptyArray(5).map((num) => (
          <ProductItemSkeleton key={num} />
        ))}
      </ProductListWrapper>
    );
  }

  if (!children || (children instanceof Array && isEmptyArray(children))) {
    return <Empty>상품이 존재하지 않습니다.</Empty>;
  }

  return <ProductListWrapper>{children}</ProductListWrapper>;
}

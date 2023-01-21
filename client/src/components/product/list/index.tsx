import { PropsWithChildren } from 'react';

import { isEmptyArray } from '../../../libs/util';
import Empty from '../../common/empty';
import { ProductListWrapper } from './index.style';

interface ProductListProps {
  isLoading?: boolean;
  isError?: boolean;
}

export default function ProductList({
  isError,
  isLoading,
  children,
}: PropsWithChildren<ProductListProps>) {
  if (!children || (children instanceof Array && isEmptyArray(children))) {
    return <Empty>상품이 존재하지 않습니다.</Empty>;
  }

  return <ProductListWrapper>{children}</ProductListWrapper>;
}

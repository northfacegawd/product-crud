import { useState } from 'react';

import { numberIntoPrice } from '../../libs/util';
import { Product } from '../../types/product';
import Badge from '../common/badge';
import Heart from '../icons/heart';
import {
  Amount,
  Brand,
  LikeCount,
  ProductImage,
  ProductInfo,
  ProductItemWrapper,
  ProductSecondInfo,
} from './index.style';
import ProductUpdateModal from './update';

export interface ProductItemProps extends Product {
  thumbnail: string;
}

export default function ProductItem(props: ProductItemProps) {
  const { amount, brand, name, thumbnail, likeCount, options } = props;
  const [open, setOpen] = useState<boolean>(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  const data = {
    ...props,
    open,
    onOpen,
    onClose,
  };

  return (
    <>
      <ProductItemWrapper onClick={onOpen}>
        <ProductImage src={thumbnail} alt={`${name} 썸네일`} />
        <ProductInfo>
          <Brand>
            {brand.name}&nbsp;
            <Heart />
          </Brand>
          {name}
        </ProductInfo>
        <ProductSecondInfo>
          <Amount>{numberIntoPrice(amount)}</Amount>
          {options?.map((option) => (
            <Badge
              style={{ marginLeft: '0.5em' }}
              key={option.slug}
              type={option.slug}
            />
          ))}
        </ProductSecondInfo>
        <LikeCount>좋아요 {numberIntoPrice(likeCount)}</LikeCount>
      </ProductItemWrapper>
      <ProductUpdateModal {...data} />
    </>
  );
}

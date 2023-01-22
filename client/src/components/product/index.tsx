import { Link } from 'react-router-dom';

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

interface ProductItemProps extends Omit<Product, 'about'> {
  thumbnail: string;
}

export default function ProductItem({
  id,
  amount,
  brand,
  name,
  thumbnail,
  likeCount,
  options,
}: ProductItemProps) {
  return (
    <ProductItemWrapper>
      <Link to={`/products/${id}`}>
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
      </Link>
    </ProductItemWrapper>
  );
}

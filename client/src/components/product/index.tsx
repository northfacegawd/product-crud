import { Link } from 'react-router-dom';

import { Product } from '../../types/product';
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
}: ProductItemProps) {
  return (
    <ProductItemWrapper>
      <Link to={`/products/${id}`}>
        <ProductImage src={thumbnail} alt={`${name} 썸네일`} />
        <ProductInfo>
          <Brand>{brand.name}</Brand>
          {name}
        </ProductInfo>
        <ProductSecondInfo>
          <Amount>{amount}</Amount>
        </ProductSecondInfo>
        <LikeCount>좋아요 {likeCount}</LikeCount>
      </Link>
    </ProductItemWrapper>
  );
}

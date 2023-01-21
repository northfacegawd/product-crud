import { Link } from 'react-router-dom';

import { Product } from '../../types/product';
import {
  Amount,
  Brand,
  ProductImage,
  ProductInfo,
  ProductItemWrapper,
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
}: ProductItemProps) {
  return (
    <ProductItemWrapper>
      <Link to={`/products/${id}`}>
        <ProductImage src={thumbnail} alt={`${name} 썸네일`} />
        <ProductInfo>
          <Brand>{brand.name}</Brand>
          {name}
        </ProductInfo>
        <ProductInfo>
          <Amount>{amount}</Amount>
        </ProductInfo>
      </Link>
    </ProductItemWrapper>
  );
}

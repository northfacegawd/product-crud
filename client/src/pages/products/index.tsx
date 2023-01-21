import ProductItem from '../../components/product';
import ProductList from '../../components/product/list';
import useProducts from '../../hooks/request/get/useProducts';
import { Heading } from './index.style';

export default function ProductsPage() {
  const { data, isLoading } = useProducts();

  return (
    <>
      <Heading>상품 목록</Heading>
      <section>
        <ProductList isLoading={isLoading}>
          {data?.map((product) => (
            <ProductItem
              key={product.id}
              {...product}
              thumbnail="https://cdn.amondz.com/product/34415/resize/mainImg/PSI_689100_50.jpeg?v=1654675772133"
            />
          ))}
        </ProductList>
      </section>
    </>
  );
}

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
            <ProductItem key={product.id} {...product} />
          ))}
        </ProductList>
      </section>
    </>
  );
}

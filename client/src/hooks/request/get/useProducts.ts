import { useQuery } from 'react-query';

import { fetchProducts } from '../../../request/product';

const useProducts = () => {
  const queryFn = () => fetchProducts();
  return useQuery(['/api/products'], queryFn, { refetchOnWindowFocus: false });
};

export default useProducts;

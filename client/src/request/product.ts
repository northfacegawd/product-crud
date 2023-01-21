import axios from 'axios';

import { ProductUploadForm } from '../pages/products/upload';
import { Product } from '../types/product';

export const createProduct = async (formData: ProductUploadForm) => {
  const { data } = await axios.post<{ product: Product }>(
    '/api/products',
    formData,
  );

  return data.product;
};

export const fetchProducts = async () => {
  const { data } = await axios.get<{ products: Product[] }>('/api/products');
  return data.products;
};

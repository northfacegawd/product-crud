import axios from 'axios';

import { FormData } from '../hooks/request/post/useCreateProduct';
import { ProductUploadForm } from '../pages/products/upload';
import { Product } from '../types/product';

export const createProduct = async (formData: FormData) => {
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

export const updateProduct = async (formData: FormData, id: number) => {
  const { data } = await axios.patch<{ product: Product }>(
    `/api/products/${id}`,
    formData,
  );

  return data.product;
};

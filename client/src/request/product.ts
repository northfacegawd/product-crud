import axios from 'axios';

import { ProductUploadForm } from '../pages/products/upload';

export const createProduct = async (formData: ProductUploadForm) => {
  const { data } = await axios.post('/api/product', formData);

  return data;
};

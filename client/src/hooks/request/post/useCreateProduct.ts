import { useMutation } from 'react-query';

import { ProductUploadForm } from '../../../pages/products/upload';
import { createProduct } from '../../../request/product';

export const useCreateProduct = () => {
  const mutateFn = (formData: ProductUploadForm) => createProduct(formData);
  return useMutation('/api/product', mutateFn);
};

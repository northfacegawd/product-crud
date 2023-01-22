import { useMutation } from 'react-query';

import { ProductUploadForm } from '../../../pages/products/upload';
import { createProduct } from '../../../request/product';

export interface FormData extends Omit<ProductUploadForm, 'thumbnail'> {
  thumbnail: string;
}

export const useCreateProduct = () => {
  const mutateFn = (formData: FormData) => createProduct(formData);
  return useMutation('/api/products', mutateFn);
};

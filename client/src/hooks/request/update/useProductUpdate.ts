import { useMutation, useQueryClient } from 'react-query';

import { ProductUploadForm } from '../../../pages/products/upload';
import { updateProduct } from '../../../request/product';

export const useUpdateProduct = (id: number) => {
  const queryClient = useQueryClient();

  const mutateFn = (formData: ProductUploadForm) => updateProduct(formData, id);
  return useMutation([`/api/products/:${id}`], mutateFn, {
    onSuccess: () => {
      queryClient.invalidateQueries(['/api/products']);
    },
  });
};

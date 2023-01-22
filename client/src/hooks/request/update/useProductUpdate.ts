import { useMutation, useQueryClient } from 'react-query';

import { updateProduct } from '../../../request/product';
import { FormData } from '../post/useCreateProduct';

export const useUpdateProduct = (id: number) => {
  const queryClient = useQueryClient();

  const mutateFn = (formData: FormData) => updateProduct(formData, id);
  return useMutation([`/api/products/:${id}`], mutateFn, {
    onSuccess: () => {
      queryClient.invalidateQueries(['/api/products']);
    },
  });
};

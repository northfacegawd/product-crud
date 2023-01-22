import { useMutation, useQueryClient } from 'react-query';

import { deleteProduct } from '../../../request/product';

const useDeleteProduct = (id: number) => {
  const queryClient = useQueryClient();

  const mutateFn = () => deleteProduct(id);
  return useMutation([`/api/products/:${id}`], mutateFn, {
    onSuccess: () => {
      queryClient.invalidateQueries(['/api/products']);
    },
  });
};

export default useDeleteProduct;

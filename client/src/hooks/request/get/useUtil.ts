import { useQuery } from 'react-query';

import { getBrands, getCategories, getOptions } from '../../../request/util';

export type UtilType = 'brands' | 'options' | 'categories';

const useUtil = (type: UtilType) => {
  const queryFn = () => {
    return {
      brands: getBrands,
      options: getOptions,
      categories: getCategories,
    }[type]();
  };
  return useQuery([`/api/${type}`], queryFn, { refetchOnWindowFocus: false });
};
export default useUtil;

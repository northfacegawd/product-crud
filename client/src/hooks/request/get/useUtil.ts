import { useQuery } from 'react-query';

import { getBrands, getCategories, getOptions } from '../../../request/util';

type utilType = 'brands' | 'options' | 'categories';

const useUtil = (type: utilType) => {
  const queryFn = () => {
    return {
      brands: getBrands,
      options: getOptions,
      categories: getCategories,
    }[type]();
  };
  return useQuery([`/api/${type}`], queryFn);
};
export default useUtil;

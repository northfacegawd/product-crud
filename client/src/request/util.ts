import axios from 'axios';

import { Util } from '../types/product';

export const getCategories = async () => {
  const { data } = await axios.get<{ categories: Util[] }>('/api/categories');
  return data.categories;
};

export const getBrands = async () => {
  const { data } = await axios.get<{ brands: Util[] }>('/api/brands');
  return data.brands;
};

export const getOptions = async () => {
  const { data } = await axios.get<{ options: Util[] }>('/api/options');
  return data.options;
};

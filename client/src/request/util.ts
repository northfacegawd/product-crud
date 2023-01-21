import axios from 'axios';

export const getCategories = async () => {
  const { data } = await axios.get('/api/categories');
  return data;
};

export const getBrands = async () => {
  const { data } = await axios.get('/api/brands');
  return data;
};

export const getOptions = async () => {
  const { data } = await axios.get('/api/options');
  return data;
};

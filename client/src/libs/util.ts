export const numberIntoPrice = (
  num: number | string,
  ceil?: boolean,
): string => {
  if (ceil) Math.ceil(typeof num === 'string' ? +num : num);
  return num.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
};

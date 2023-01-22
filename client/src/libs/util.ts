export const numberIntoPrice = (num: number | string): string => {
  const parts = num.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
};

export const isEmptyArray = <T>(array: Array<T>): boolean => {
  return array.every((data) => {
    if (data instanceof Array) {
      return isEmptyArray(data);
    }
    return !data;
  });
};

export const getEmptyArray = (length: number) => {
  return Array.from({ length }, (_, i) => i);
};

export const getImageUrl = (imageId: string, variant = 'public') => {
  return `https://imagedelivery.net/r0Q-rasaBnYOnRDCjA92sQ/${imageId}/${variant}`;
};

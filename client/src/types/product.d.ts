export interface Util {
  id: string;
  slug: string;
  name: string;
}

export interface Product {
  id: number;
  name: string;
  about: string;
  amount: string;
  options: Option[];
  category: Util;
  brand: Util;
}

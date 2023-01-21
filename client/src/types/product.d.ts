export interface Util {
  id: string;
  slug: string;
  name: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  options: Option[];
}

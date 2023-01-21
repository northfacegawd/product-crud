export interface Util {
  id: string;
  slug: string;
  name: string;
}

export interface Product {
  id: number;
  name: string;
  amount: string;
  gender: string;
  about: string;
  brandId?: string;
  categoryId?: string;
  likeCount: number;
  createdAt: Date;
  updatedAt: Date;
  options?: Option[];
  category: Util;
  brand: Util;
}

import { Product } from '@prisma/client';

export interface CreateProductBody
  extends Omit<Product, 'id' | 'brandId' | 'categoryId'> {
  brand: string;
  category: string;
  options: [];
}

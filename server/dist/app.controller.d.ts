import { ProductService } from './services/product.service';
import { Product } from '@prisma/client';
import { Response } from 'express';
export declare class AppController {
    private readonly productService;
    constructor(productService: ProductService);
    getProducts(res: Response): Promise<Response<any, Record<string, any>>>;
    getProductById(id: number, res: Response): Promise<Response<any, Record<string, any>>>;
    uploadProduct(productData: Omit<Product, 'id'>, res: Response): Promise<Response<any, Record<string, any>>>;
    deleteProduct(id: number, res: Response): Promise<Response<any, Record<string, any>>>;
}

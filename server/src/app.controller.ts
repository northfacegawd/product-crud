import { ProductService } from './services/product.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { Product } from '@prisma/client';
import { Response } from 'express';

@Controller('api')
export class AppController {
  constructor(private readonly productService: ProductService) {}

  @Get('products')
  async getProducts(@Res() res: Response) {
    try {
      const products = await this.productService.products({});
      return res.status(HttpStatus.OK).json({ products });
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json({ error });
    }
  }

  @Get('products/:id')
  async getProductById(@Param('id') id: number, @Res() res: Response) {
    const product = await this.productService.product({ id });
    try {
      if (!product) throw Error('not_found');
      return res.status(HttpStatus.OK).json({ product });
    } catch (error) {
      if (error?.message === 'not_found') {
        return res.status(HttpStatus.NOT_FOUND).json({ error });
      }
      return res.status(HttpStatus.BAD_REQUEST).json({ error });
    }
  }

  @Post('products')
  async uploadProduct(
    @Body() productData: Omit<Product, 'id'>,
    @Res() res: Response,
  ) {
    console.log(productData);
    try {
      const product = await this.productService.createProduct(productData);
      return res.status(HttpStatus.OK).json({ product });
    } catch (error) {
      console.log(error);
      return res.status(HttpStatus.BAD_REQUEST).json({ error });
    }
  }

  @Delete('products/:id')
  async deleteProduct(@Param('id') id: number, @Res() res: Response) {
    try {
      await this.productService.deleteProduct({ id });
      return res.status(HttpStatus.OK).json({ success: true });
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json({ error });
    }
  }
}

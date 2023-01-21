import { ProductService } from './services/product.service';
import { UtilService } from './services/util.service';
import { CreateProductBody } from './types/product';
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
import { Response } from 'express';

@Controller('api')
export class AppController {
  constructor(
    private readonly productService: ProductService,
    private readonly utilService: UtilService,
  ) {}

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

  @Get('brands')
  async getBrands(@Res() res: Response) {
    try {
      const brands = await this.utilService.brands({});
      return res.status(HttpStatus.OK).json({ brands });
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json({ error });
    }
  }

  @Get('options')
  async getOptions(@Res() res: Response) {
    try {
      const options = await this.utilService.options({});
      return res.status(HttpStatus.OK).json({ options });
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json({ error });
    }
  }

  @Get('categories')
  async getCategories(@Res() res: Response) {
    try {
      const categories = await this.utilService.categories({});
      return res.status(HttpStatus.OK).json({ categories });
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json({ error });
    }
  }

  @Post('products')
  async uploadProduct(
    @Body() productData: CreateProductBody,
    @Res() res: Response,
  ) {
    try {
      const product = await this.productService.createProduct({
        ...productData,
        brand: {
          connect: {
            slug: productData.brand,
          },
        },
        category: {
          connect: {
            slug: productData.category,
          },
        },
        options: {
          connect: productData.options.map((option) => ({ slug: option })),
        },
      });
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

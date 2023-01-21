import { PrismaService } from './prisma.service';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Injectable()
export class UtilService {
  constructor(private prisma: PrismaService) {}

  async brands(param: {
    skip?: number;
    take?: number;
    cursor?: Prisma.BrandWhereUniqueInput;
    where?: Prisma.BrandWhereInput;
    orderBy?: Prisma.BrandOrderByWithRelationInput;
  }) {
    return this.prisma.brand.findMany({ ...param });
  }

  async categories(param: {
    skip?: number;
    take?: number;
    cursor?: Prisma.CategoryWhereUniqueInput;
    where?: Prisma.CategoryWhereInput;
    orderBy?: Prisma.CategoryOrderByWithRelationInput;
  }) {
    return this.prisma.category.findMany({ ...param });
  }

  async options(param: {
    skip?: number;
    take?: number;
    cursor?: Prisma.OptionWhereUniqueInput;
    where?: Prisma.OptionWhereInput;
    orderBy?: Prisma.OptionOrderByWithRelationInput;
  }) {
    return this.prisma.option.findMany({ ...param });
  }
}

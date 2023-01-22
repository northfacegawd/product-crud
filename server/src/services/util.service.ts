import { PrismaService } from './prisma.service';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CloudFlareResponse } from 'src/types/util';

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

  async getImageUploadUrl() {
    const response: CloudFlareResponse = await (
      await fetch(
        `https://api.cloudflare.com/client/v4/accounts/${process.env.CF_ID}/images/v2/direct_upload`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.CF_TOKEN}`,
          },
        },
      )
    ).json();
    return response.result;
  }
}

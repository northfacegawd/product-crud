import { PrismaService } from './prisma.service';
import { Prisma } from '@prisma/client';
export declare class ProductService {
    private prisma;
    constructor(prisma: PrismaService);
    product(productWhereUniqueInput: Prisma.ProductWhereUniqueInput): Promise<import(".prisma/client").Product>;
    products(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.ProductWhereUniqueInput;
        where?: Prisma.ProductWhereInput;
        orderBy?: Prisma.ProductOrderByWithRelationInput;
    }): Promise<import(".prisma/client").Product[]>;
    createProduct(data: Prisma.ProductCreateInput): Promise<import(".prisma/client").Product>;
    updateProduct(params: {
        where: Prisma.ProductWhereUniqueInput;
        data: Prisma.ProductUpdateInput;
    }): Promise<import(".prisma/client").Product>;
    deleteProduct(where: Prisma.ProductWhereUniqueInput): Promise<import(".prisma/client").Product>;
}

import { AppController } from './app.controller';
import { PrismaService } from './services/prisma.service';
import { ProductService } from './services/product.service';
import { UtilService } from './services/util.service';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [ProductService, PrismaService, UtilService],
})
export class AppModule {}

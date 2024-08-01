import { Logger, Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import * as UseCases from './use-cases';
import { CategoryRepository } from '../category/repository/category.repository';
import { ProductService } from './product.service';
import { ProductRepository } from './repository/product.repository';

const usecases = Object.values(UseCases);
@Module({
  imports: [],
  controllers: [ProductController],
  providers: [
    Logger,
    ...usecases,
    ProductService,
    ProductRepository,
    CategoryRepository,
  ],
  exports: [ProductService, ProductRepository],
})
export class ProductModule {}

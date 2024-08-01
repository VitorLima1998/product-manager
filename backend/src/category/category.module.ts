import { Logger, Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import * as UseCases from './use-cases';
import { CategoryRepository } from './repository/category.repository';

const usecases = Object.values(UseCases);

@Module({
  imports: [],
  controllers: [CategoryController],
  providers: [CategoryService, CategoryRepository, ...usecases, Logger],
  exports: [CategoryService, CategoryRepository],
})
export class CategoryModule {}

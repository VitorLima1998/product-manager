import { CategoryRepository } from '../../category/repository/category.repository';
import { ProductRepository } from '../repository/product.repository';
import { CreateProductInput } from './../repository/inputs/create-product.input';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class CreateProductUseCase {
  constructor(
    private readonly productRepository: ProductRepository,
    private readonly categoryRepository: CategoryRepository,
    private readonly logger: Logger,
  ) {}

  async execute(data: CreateProductInput) {
    try {
      const category = await this.categoryRepository.findCategoryById(
        data.categoryId,
      );

      if (!category) {
        this.logger.error('Category not found');
      }

      const product = await this.productRepository.createProduct(data);

      this.logger.log(
        'Product created successfully!',
        CreateProductUseCase.name,
      );
      return product;
    } catch (err) {
      this.logger.error(err.message);
      throw err;
    }
  }
}

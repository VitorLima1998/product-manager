import { Injectable, Logger } from '@nestjs/common';
import { CreateCategoryInput } from '../repository/inputs/create-category.input';
import { CategoryRepository } from '../repository/category.repository';

@Injectable()
export class CreateCategoryUseCase {
  constructor(
    private readonly categoryRepository: CategoryRepository,
    private readonly logger: Logger,
  ) {}

  async execute(data: CreateCategoryInput) {
    try {
      const category = await this.categoryRepository.createCategory(data);
      this.logger.log(
        `Category created successfully!`,
        CreateCategoryUseCase.name,
      );
      return category;
    } catch (err) {
      this.logger.error(err.message);
      throw err;
    }
  }
}

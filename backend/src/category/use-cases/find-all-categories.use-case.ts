import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CategoryRepository } from '../repository/category.repository';

@Injectable()
export class FindAllCategoriesUseCase {
  constructor(
    private readonly categoryRepository: CategoryRepository,
    private readonly logger: Logger,
  ) {}

  async execute() {
    try {
      const categories = await this.categoryRepository.findAllCategories();
      if (!categories) {
        const error = new NotFoundException(`No categories found!`);
        this.logger.error(error.message);
        throw error;
      }

      this.logger.log(`Categories found!`, FindAllCategoriesUseCase.name);
      return categories;
    } catch (err) {
      this.logger.error(err.message);
      throw err;
    }
  }
}

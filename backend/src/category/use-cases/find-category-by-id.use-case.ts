import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CategoryRepository } from '../repository/category.repository';

@Injectable()
export class FindCategoryByIdUseCase {
  constructor(
    private readonly categoryRepository: CategoryRepository,
    private readonly logger: Logger,
  ) {}

  async execute(id: string) {
    try {
      const category = await this.categoryRepository.findCategoryById(id);
      if (!category) {
        const error = new NotFoundException(`Category not found!`);
        this.logger.error(error.message);
        throw Error;
      }

      this.logger.log(`Category found!`, FindCategoryByIdUseCase.name);
      return category;
    } catch (err) {
      this.logger.error(err.message);
      throw err;
    }
  }
}

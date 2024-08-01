import { Injectable, Logger } from '@nestjs/common';
import { CategoryRepository } from '../repository/category.repository';

@Injectable()
export class DeleteCategoryUseCase {
  constructor(
    private readonly categoryRepository: CategoryRepository,
    private readonly logger: Logger,
  ) {}

  async execute(id: string) {
    try {
      const category = await this.categoryRepository.findCategoryById(id);
      if (!category) {
        const error = new Error(`Category not found!`);
        this.logger.error(error.message);
        throw error;
      }

      await this.categoryRepository.removeCategory(id);

      this.logger.log(
        `Category deleted successfully!`,
        DeleteCategoryUseCase.name,
      );
      return category;
    } catch (err) {
      this.logger.error(err.message);
      throw err;
    }
  }
}

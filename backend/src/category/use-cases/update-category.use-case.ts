import { Injectable, Logger } from '@nestjs/common';
import { CategoryRepository } from '../repository/category.repository';
import { UpdateCategoryInput } from '../repository/inputs/update-category.input';

@Injectable()
export class UpdateCategoryUseCase {
  constructor(
    private readonly categoryRepository: CategoryRepository,
    private readonly logger: Logger,
  ) {}

  async execute(id: string, data: UpdateCategoryInput) {
    try {
      const category = await this.categoryRepository.findCategoryById(id);
      if (!category) {
        const error = new Error(`Category not found!`);
        throw error;
      }

      const updatedCategory = await this.categoryRepository.updateCategory(
        id,
        data,
      );

      this.logger.log(
        `Category updated successfully!`,
        UpdateCategoryUseCase.name,
      );
      return updatedCategory;
    } catch (err) {
      this.logger.error(err.message);
      throw err;
    }
  }
}

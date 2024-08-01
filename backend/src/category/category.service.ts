import { Injectable } from '@nestjs/common';
import { CreateCategoryInput } from './repository/inputs/create-category.input';
import {
  CreateCategoryUseCase,
  DeleteCategoryUseCase,
  FindAllCategoriesUseCase,
  FindCategoryByIdUseCase,
  UpdateCategoryUseCase,
} from './use-cases';
import { UpdateCategoryInput } from './repository/inputs/update-category.input';

@Injectable()
export class CategoryService {
  constructor(
    private readonly createCategoryUseCase: CreateCategoryUseCase,
    private readonly findAllCategoriesUseCase: FindAllCategoriesUseCase,
    private readonly findCategoryByIdUseCase: FindCategoryByIdUseCase,
    private readonly updateCategoryUseCase: UpdateCategoryUseCase,
    private readonly deleteCategoryUseCase: DeleteCategoryUseCase,
  ) {}

  async createCategory(data: CreateCategoryInput) {
    return await this.createCategoryUseCase.execute(data);
  }

  async findAllCategories() {
    return await this.findAllCategoriesUseCase.execute();
  }

  async findCategoryById(id: string) {
    return await this.findCategoryByIdUseCase.execute(id);
  }

  async updateCategory(id: string, data: UpdateCategoryInput) {
    return this.updateCategoryUseCase.execute(id, data);
  }

  async removeCategory(id: string) {
    return this.deleteCategoryUseCase.execute(id);
  }
}

import { Injectable } from '@nestjs/common';
import { CreateCategoryInput } from './inputs/create-category.input';
import { PrismaService } from '../../shared/database/prisma';
import { UpdateCategoryInput } from './inputs/update-category.input';

@Injectable()
export class CategoryRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async createCategory(data: CreateCategoryInput) {
    return await this.prismaService.category.create({
      data,
    });
  }

  async findAllCategories() {
    return await this.prismaService.category.findMany();
  }

  async findCategoryById(id: string) {
    return await this.prismaService.category.findUnique({
      where: {
        id,
      },
    });
  }

  async updateCategory(id: string, data: UpdateCategoryInput) {
    return await this.prismaService.category.update({
      where: {
        id,
      },
      data,
    });
  }

  async removeCategory(id: string) {
    return await this.prismaService.category.delete({
      where: {
        id,
      },
    });
  }
}

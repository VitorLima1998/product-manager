import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../shared/database/prisma';
import { CreateProductInput } from './inputs/create-product.input';
import { UpdateProductInput } from './inputs/update-product.inputs';

@Injectable()
export class ProductRepository {
  constructor(private readonly prismaService: PrismaService) {}
  async createProduct(data: CreateProductInput) {
    return await this.prismaService.product.create({
      data: {
        name: data.name,
        price: data.price,
        categoryId: data.categoryId,
      },
      include: {
        category: {
          select: {
            name: true,
          },
        },
      },
    });
  }

  async findAllProducts() {
    return this.prismaService.product.findMany();
  }

  findProductById(id: string) {
    return this.prismaService.product.findUnique({
      where: {
        id,
      },
    });
  }

  async updateProduct(id: string, data: UpdateProductInput) {
    return this.prismaService.product.update({
      where: {
        id,
      },
      data,
    });
  }

  async removeProduct(id: string) {
    return this.prismaService.product.delete({
      where: {
        id,
      },
    });
  }
}

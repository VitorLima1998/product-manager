import { Injectable } from '@nestjs/common';
import { CreateProductUseCase } from './use-cases/create-product.use-case';
import { CreateProductInput } from './repository/inputs/create-product.input';
import {
  DeleteProductUseCase,
  FindAllProductsUseCase,
  FindProductByIdUseCase,
  UpdateProductUseCase,
} from './use-cases';
import { UpdateProductInput } from './repository/inputs/update-product.inputs';

@Injectable()
export class ProductService {
  constructor(
    private readonly createProductUseCase: CreateProductUseCase,
    private readonly findAllProductsUseCase: FindAllProductsUseCase,
    private readonly findProductByIdUseCase: FindProductByIdUseCase,
    private readonly updateProductUseCase: UpdateProductUseCase,
    private readonly deleteProductUseCase: DeleteProductUseCase,
  ) {}
  async createProduct(data: CreateProductInput) {
    return await this.createProductUseCase.execute(data);
  }

  async findAllProducts() {
    return await this.findAllProductsUseCase.execute();
  }

  async findProductById(id: string) {
    return await this.findProductByIdUseCase.execute(id);
  }

  async updateProduct(id: string, data: UpdateProductInput) {
    return await this.updateProductUseCase.execute(id, data);
  }

  async removeProduct(id: string) {
    return await this.deleteProductUseCase.execute(id);
  }
}

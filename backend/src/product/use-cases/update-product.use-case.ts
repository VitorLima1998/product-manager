import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { UpdateProductInput } from '../repository/inputs/update-product.inputs';
import { ProductRepository } from '../repository/product.repository';

@Injectable()
export class UpdateProductUseCase {
  constructor(
    private readonly productRepository: ProductRepository,
    private readonly logger: Logger,
  ) {}

  async execute(id: string, data: UpdateProductInput) {
    try {
      const product = await this.productRepository.findProductById(id);
      if (!product) {
        const error = new NotFoundException('Product not found!');
        throw error;
      }

      const updatedProduct = await this.productRepository.updateProduct(
        id,
        data,
      );

      this.logger.log(
        'Product updated successfully!',
        UpdateProductUseCase.name,
      );
      return updatedProduct;
    } catch (err) {
      this.logger.error(err.message);
      throw err;
    }
  }
}

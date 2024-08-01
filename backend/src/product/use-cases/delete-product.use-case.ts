import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { ProductRepository } from '../repository/product.repository';

@Injectable()
export class DeleteProductUseCase {
  constructor(
    private readonly productRepository: ProductRepository,
    private readonly logger: Logger,
  ) {}

  async execute(id: string) {
    try {
      const product = await this.productRepository.findProductById(id);
      if (!product) {
        const error = new NotFoundException('Product not found!');
        this.logger.error(error.message);
        throw error;
      }

      const deletedProduct = await this.productRepository.removeProduct(id);
      this.logger.log('Product deleted!', DeleteProductUseCase.name);
      return deletedProduct;
    } catch (err) {
      this.logger.error(err.message);
      throw err;
    }
  }
}

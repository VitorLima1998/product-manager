import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { ProductRepository } from '../repository/product.repository';

@Injectable()
export class FindProductByIdUseCase {
  constructor(
    private readonly productRepository: ProductRepository,
    private readonly logger: Logger,
  ) {}

  async execute(id: string) {
    try {
      const product = await this.productRepository.findProductById(id);
      if (!product) {
        const error = new NotFoundException('Product not found!');
        throw error;
      }

      this.logger.log('Product found!', FindProductByIdUseCase.name);
      return product;
    } catch (err) {
      this.logger.error(err.message);
      throw err;
    }
  }
}

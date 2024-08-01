import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { ProductRepository } from '../repository/product.repository';

@Injectable()
export class FindAllProductsUseCase {
  constructor(
    private readonly productRepository: ProductRepository,
    private readonly logger: Logger,
  ) {}

  async execute() {
    try {
      const products = await this.productRepository.findAllProducts();
      if (!products) {
        const error = new NotFoundException('No products found!');
        this.logger.error(error.message);
        throw Error;
      }

      this.logger.log('Products found!', FindAllProductsUseCase.name);
      return products;
    } catch (err) {
      this.logger.error(err.message);
      throw err;
    }
  }
}

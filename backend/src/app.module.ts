import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SharedModule } from './shared/shared.module';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [ProductModule, SharedModule, CategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

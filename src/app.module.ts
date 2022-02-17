import { TestsController } from './tests/testsController';
import { catsModule } from './cats/cats.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [catsModule],
  controllers: [TestsController],
})
export class AppModule {}

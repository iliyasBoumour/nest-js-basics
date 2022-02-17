import { Module } from '@nestjs/common';
import { TestsController } from './testsController';

@Module({
  controllers: [TestsController],
})
export class TestsModule {}

import { Cat } from './interfaces/cat.interface';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { Controller, Get, Post, Body, Param } from '@nestjs/common';

@Controller('/cats')
export class CatsController {
  constructor(private catsService: CatsService) {}
  @Get()
  async getAll(): Promise<Cat[]> {
    return this.catsService.findAllCats();
  }
  @Post()
  async createCat(@Body() createCatDto: CreateCatDto) {
    return this.catsService.addCat(createCatDto);
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }
}

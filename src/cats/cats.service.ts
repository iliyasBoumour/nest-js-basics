import { Cat } from './interfaces/cat.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  addCat(cat: Cat) {
    this.cats.push(cat);
  }

  findAllCats(): Cat[] {
    return this.cats;
  }
}

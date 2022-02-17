import {
  Controller,
  Get,
  Query,
  Res,
  HttpCode,
  Redirect,
  Param,
  Post,
  Body,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { CreateTestDto } from './dto/Create-test.dto';

@Controller('/tests')
export class TestsController {
  // constructor(private readonly usersService: UsersService) {}
  @Get('/test')
  @Redirect('http://localhost:3000/users', 301)
  testRedirect(): void {
    console.log('redirect');
  }
  @Get('/testRes')
  testRes(@Query() we: string, @Res() res: Response): void {
    console.log(we);
    // we must send our custum response if we didnt add  { passthrough: true } to @Res
    res.status(HttpStatus.OK).send('we');
  }

  @Get('/testStatus')
  @HttpCode(300)
  test(): string {
    return 'see the status code';
  }
  @Get()
  getAll(): string {
    return 'weeeeeeeeeeee';
  }
  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns a #${id} user`;
  }
  @Post()
  create(@Body() createUserDto: CreateTestDto): CreateTestDto {
    return createUserDto;
  }
}

import { NumericParam } from '../utils/numericParam';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }
  @Get('profile')
  findLoggedIn(@Request() req) {
    return req.user;
  }
  @Get(':id')
  findOne(@Param() id: NumericParam) {
    return this.usersService.findOne(id.id);
  }

  @Patch(':id')
  update(@Param() id: NumericParam, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id.id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param() id: NumericParam) {
    return this.usersService.remove(id.id);
  }
}

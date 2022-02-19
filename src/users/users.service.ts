import { Role, RoleEnum } from './entities/role.entity';
import { User } from './entities/user.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
    @InjectRepository(Role) private rolesRepository: Repository<Role>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const newUser: User = this.usersRepository.create(createUserDto);
    const roleUser: Role = await this.rolesRepository.findOne({
      RoleName: RoleEnum.ROLE_USER,
    });
    newUser.roles = [roleUser];
    return this.usersRepository.save(newUser);
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find({ relations: ['roles'] });
  }

  async findByNameOrMail(id: string): Promise<User> {
    try {
      return await this.usersRepository.findOneOrFail({
        where: [{ username: id }, { email: id }],
        relations: ['roles'],
      });
    } catch (error) {
      throw new NotFoundException();
    }
  }
  async findOne(id: number): Promise<User> {
    try {
      return await this.usersRepository.findOneOrFail(id, {
        relations: ['roles'],
      });
    } catch (error) {
      throw new NotFoundException();
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user: User = await this.findOne(id);
    const newUser: User = { ...user, ...updateUserDto };
    return this.usersRepository.save(newUser);
  }

  async remove(id: number): Promise<void> {
    const user: User = await this.findOne(id);
    await this.usersRepository.remove(user);
  }
}

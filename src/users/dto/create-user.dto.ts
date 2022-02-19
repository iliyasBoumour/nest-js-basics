import { IsString, MinLength, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsString()
  username: string;
  @IsEmail()
  email: string;
  @MinLength(8)
  password: string;
}

import { IsString, Length, IsNotEmpty } from 'class-validator';
export class CreatePostDto {
  @Length(10, 50)
  title: string;
  @IsString()
  image: string;
  @IsNotEmpty()
  description: string;
}

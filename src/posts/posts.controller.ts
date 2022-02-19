import { Public } from '../utils/access.decorator';
import { NumericParam } from '../utils/numericParam';
import { Post as PostModel } from './entities/post.entity';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  create(@Body() createPostDto: CreatePostDto): Promise<PostModel> {
    return this.postsService.create(createPostDto);
  }

  @Public()
  @Get()
  findAll(): Promise<PostModel[]> {
    return this.postsService.findAll();
  }

  @Public()
  @Get(':id')
  findOne(@Param() id: NumericParam): Promise<PostModel> {
    return this.postsService.findOne(id.id);
  }

  @Patch(':id')
  update(
    @Param() id: NumericParam,
    @Body() updatePostDto: UpdatePostDto,
  ): Promise<PostModel> {
    return this.postsService.update(id.id, updatePostDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param() id: NumericParam): Promise<void> {
    return this.postsService.remove(id.id);
  }
}

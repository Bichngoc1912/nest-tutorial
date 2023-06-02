import { Body, Controller, Post } from '@nestjs/common';
import { PostService } from './post.services';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}
  @Post()
  createPost(@Body() post: any) {
    return this.postService.createPost(post);
  }
}

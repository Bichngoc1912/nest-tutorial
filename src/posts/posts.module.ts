import { Module } from '@nestjs/common';
import { StorageModule } from 'src/store/store.module';
import { PostController } from './post.constroller';
import { PostService } from './post.services';

@Module({
  imports: [
    StorageModule.register({
      dirName: 'storage',
      fileName: 'posts.json',
    }),
  ],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}

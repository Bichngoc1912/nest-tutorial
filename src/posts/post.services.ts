import { Injectable } from '@nestjs/common';
import { StorageService } from 'src/store/store.services';

@Injectable()
export class PostService {
  constructor(private readonly storageService: StorageService) {}
  createPost(post: any) {
    this.storageService.save(post);
  }
}

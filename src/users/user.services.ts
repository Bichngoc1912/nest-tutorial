import { Inject, Injectable } from '@nestjs/common';
import { UserDto } from './user.dto';
import { ConfigApp } from 'src/types/store/store.config';
import { StorageService } from 'src/store/store.services';

@Injectable()
export class UserServices {
  constructor(
    @Inject('APP_CONFIGS') appFacebook: ConfigApp,
    private readonly storageService: StorageService,
  ) {
    console.log(appFacebook);
  }

  createUser(user: UserDto) {
    this.storageService.save(user);
    return user;
  }
}

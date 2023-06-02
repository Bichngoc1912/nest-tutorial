import { Inject, Injectable } from '@nestjs/common';
import { UserDto } from './user.dto';
import { ConfigApp } from 'src/types/store/store.config';
import { StoreService } from './store.service';

@Injectable()
export class UserServices {
  constructor(
    @Inject('APP_FACEBOOK') appFacebook: ConfigApp,
    @Inject('STORE_SERVICE') private storeService: StoreService,
  ) {
    console.log(appFacebook);
  }

  createUser(user: UserDto) {
    this.storeService.save(user);
    return user;
  }
}

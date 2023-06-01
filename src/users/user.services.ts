import { Inject, Injectable } from '@nestjs/common';
import { UserDto } from './user.dto';
import { ConfigApp } from 'src/types/store/store.config';

@Injectable()
export class UserServices {
  constructor(@Inject('APP_FACEBOOK') appFacebook: ConfigApp) {
    console.log(appFacebook);
  }

  createUser(user: UserDto) {
    //todo something insert data to db
    return user;
  }
}

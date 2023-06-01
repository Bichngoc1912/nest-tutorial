import { Injectable } from '@nestjs/common';
import { UserDto } from './user.dto';

@Injectable()
export class UserServices {
  createUser(user: UserDto) {
    //todo something insert data to db
    return user;
  }
}

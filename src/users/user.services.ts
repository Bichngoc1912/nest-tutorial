import { Injectable } from '@nestjs/common';
import { UserDto } from './user.dto';

@Injectable()
export class UserServices {
  createUser(user: UserDto) {
    user.id = 1;
    user.createdAt = new Date();
    user.updatedAt = new Date();

    return UserDto.plainToInstance(user);
  }
}

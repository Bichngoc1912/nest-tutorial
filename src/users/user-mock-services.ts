import { UserDto } from './user.dto';

export class UserMockService {
  createUser(user: UserDto): any {
    return {
      username: 'Bich mock 01',
      password: '1234567891',
    };
  }
}

import { Body, Controller, Get, Param, Post, Inject } from '@nestjs/common';
import { UserDto } from './user.dto';
import { UserServices } from './user.services';

@Controller('users')
export class UserController {
  // constructor(private readonly moduleRef: ModuleRef) {} //cach 1
  constructor(
    @Inject('USER_SERVICES_PROVICE')
    private readonly userServices: UserServices,
  ) {}

  @Post('/create')
  createUser(@Body() user: UserDto) {
    // return this.moduleRef.get('USER_SERVICES_PROVICE').createUser(user); cach 1
    return this.userServices.createUser(user);
  }

  @Get(':id')
  getUserById(@Param('id') id: number) {
    console.log('id', id);
    return [
      {
        name: 'Giang',
        age: 8,
      },
      {
        name: 'Giang 01',
        age: 18,
      },
    ];
  }
}

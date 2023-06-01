import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserDto } from './user.dto';
import { plainToInstance } from 'class-transformer';
@Controller('users')
export class UserController {
  @Post('/create')
  createUser(@Body() user: UserDto) {
    user.id = 1;
    user.createdAt = new Date();
    user.updatedAt = new Date();

    return UserDto.plainToInstance(user);
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

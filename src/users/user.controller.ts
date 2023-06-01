import { Controller, Get, Post } from '@nestjs/common';

@Controller('users')
export class UserController {
  @Get()
  getAllUser() {
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

  @Post('/create')
  createUser() {
    return {
      name: 'Giang 02',
      old: 20,
    };
  }
}

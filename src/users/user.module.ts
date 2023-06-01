import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserServices } from './user.services';

@Module({
  controllers: [UserController],
  providers: [
    {
      provide: 'USER_SERVICES_PROVICE',
      useClass: UserServices,
    },
  ],
})
export class UserModule {}

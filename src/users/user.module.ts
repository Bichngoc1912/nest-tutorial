import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserServices } from './user.services';
import { UserMockService } from './user-mock-services';

@Module({
  controllers: [UserController],
  providers: [
    {
      provide: 'USER_SERVICES_PROVICE',
      useClass: UserMockService,
    },
  ],
})
export class UserModule {}

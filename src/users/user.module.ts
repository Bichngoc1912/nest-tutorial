import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserServices } from './user.services';
import { ConfigApp } from 'src/types/store/store.config';

const configFacebook = {
  appId: 'facebook001',
  appSecret: 'facebook001',
};

@Module({
  controllers: [UserController],
  providers: [
    UserServices,
    {
      provide: 'APP_CONFIGS',
      useValue: {
        appId: configFacebook.appId,
        appSecret: configFacebook.appSecret,
      } as ConfigApp,
    },
  ],
})
export class UserModule {}

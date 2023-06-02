import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserServices } from './user.services';
import { ConfigApp } from 'src/types/store/store.config';
import { StoreService } from './store.service';

const configFacebook = {
  appId: 'facebook001',
  appSecret: 'facebook001',
};

function createStore(config: ConfigApp): StoreService {
  console.log('config', config);
  return new StoreService();
}

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
    {
      provide: 'STORE_SERVICE',
      useFactory: createStore,
      inject: [
        {
          token: 'APP_CONFIGS',
          optional: true,
        },
      ],
    },
  ],
})
export class UserModule {}

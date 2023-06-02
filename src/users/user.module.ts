import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserServices } from './user.services';
import { ConfigApp } from 'src/types/store/store.config';
import { StorageModule } from 'src/store/store.module';
import { StorageService } from 'src/store/store.services';

const configFacebook = {
  appId: 'facebook001',
  appSecret: 'facebook001',
};

function createStore(config: ConfigApp) {
  console.log('config', config);
  // return new StorageService();
}

@Module({
  imports: [
    StorageModule.register({
      dirName: 'storage',
      fileName: 'user.json',
    }),
  ],
  controllers: [UserController],
  providers: [
    UserServices,
    {
      provide: 'USER_SERVICES_PROVICE',
      useClass: UserServices,
    },
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

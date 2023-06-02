import { Module, DynamicModule } from '@nestjs/common';
import { StorageService } from './store.services';

export interface StorageConfig {
  dirName: string;
  fileName: string;
}

@Module({
  providers: [StorageService],

  exports: [StorageService], // export ra cho module khac su dung
})
export class StorageModule {
  static register(config: StorageConfig): DynamicModule {
    return {
      module: StorageModule,
      providers: [
        StorageService,
        {
          provide: 'STORAGE_CONFIGS',
          useValue: config,
        },
      ],
      exports: [StorageService],
    };
  }
}

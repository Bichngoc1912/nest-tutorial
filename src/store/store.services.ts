import { Inject, Injectable } from '@nestjs/common';
import { StorageConfig } from './store.module';
import * as fs from 'fs';

@Injectable()
export class StorageService {
  constructor(
    @Inject('STORAGE_CONFIGS') private readonly storageConfigs: StorageConfig,
  ) {
    if (!fs.existsSync(this.storageConfigs.dirName)) {
      fs.mkdirSync(this.storageConfigs.dirName);
    }
  }
  save(data: any): void {
    console.log('data', data);
    fs.appendFileSync(
      `${this.storageConfigs.dirName}/${this.storageConfigs.fileName}`,
      JSON.stringify(data),
    );
  }
}

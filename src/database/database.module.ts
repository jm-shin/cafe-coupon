import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import mongodbConfig from '../config/mongodb.config';
import { databaseConnectionProviders } from './database-connection.providers';

@Module({
  imports: [ConfigModule.forFeature(mongodbConfig)],
  providers: [...databaseConnectionProviders],
  exports: [...databaseConnectionProviders],
})
export class DatabaseModule {}

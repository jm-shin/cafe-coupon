import { DATABASE_CONNECTION } from './database.constants';
import { Connection, createConnection } from 'mongoose';
import { ConfigType } from '@nestjs/config';
import mongodbConfig from '../config/mongodb.config';

export const databaseConnectionProviders = [
  {
    provide: DATABASE_CONNECTION,
    useFactory: (dbConfig: ConfigType<typeof mongodbConfig>): Connection => {
      const conn = createConnection(dbConfig.uri, {});
      return conn;
    },
    inject: [mongodbConfig.KEY],
  },
];

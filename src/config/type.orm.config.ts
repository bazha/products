import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Product } from '../entities/product.entity';
import * as dotenv from 'dotenv';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Product],
  synchronize: true,
};

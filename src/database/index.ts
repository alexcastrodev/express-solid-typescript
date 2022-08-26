import dotenv from 'dotenv';
import { DataSource } from 'typeorm';
import 'reflect-metadata';
import { readFile } from 'fs';

dotenv.config({ path: __dirname + '/../../.env' });

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: 'rentex',
  synchronize: true,
  logging: true,
  entities: ['./src/modules/cars/entities/Category.ts'],
  subscribers: [],
  migrations: ['./src/database/migrations/*.ts'],
});

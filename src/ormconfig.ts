import { DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();
export const config: DataSourceOptions = {
    type: "postgres",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [__dirname + '/**/entities/*.entity{.ts,.js}'],
    migrations: [__dirname + '/migrations/*.{.ts,.js}'],
    synchronize: true,
};

import { DataSourceOptions } from 'typeorm';

export const config: DataSourceOptions = {
    type: "postgres",
    host: "isabelle.db.elephantsql.com",
    port: 5432,
    username: "qdqzapnc",
    password: "XlTniJI4dxrpjx1WJeMTsoVjLYXt175C",
    database: "qdqzapnc",
    entities: [__dirname + '/**/entities/*.entity{.ts,.js}'],
    migrations: ['src/migrations/*.ts'],
    synchronize: true,
};


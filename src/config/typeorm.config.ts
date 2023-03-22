import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: '172.17.0.2',
  port: 5432,
  username: 'bob',
  password: 'bob',
  database: 'bobdb',
  entities: [__dirname + '/../**/*.entity.ts'],
  synchronize: true
}
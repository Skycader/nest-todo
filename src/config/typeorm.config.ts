import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Todo } from 'src/modules/todos/controllers/todos/todos.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: '172.17.0.2',
  port: 5432,
  username: 'bob',
  password: 'bob',
  database: 'bobdb',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  // entities: ['src/entity/*.ts', './build/src/entity/*.js'], // <- Here!
  // entities: [Todo],
  synchronize: true,
};

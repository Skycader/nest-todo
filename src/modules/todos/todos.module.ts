import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { TodosController } from './controllers/todos/todos.controller';
import { Todo } from './controllers/todos/todos.entity';
import { TodosRepository } from './controllers/todos/todos.repository';
import { TodosService } from './services/todos/todos.service';
// import { AuthModule } from '../../auth/auth.module'
@Module({
  imports: [TypeOrmModule.forFeature([Todo]), AuthModule],
  controllers: [TodosController],
  providers: [TodosService, TodosRepository],
  exports: [TodosRepository],
})
export class TodosModule {}

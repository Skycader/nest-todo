import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodosController } from './controllers/todos/todos.controller';
import { Todo } from './controllers/todos/todos.entity';
import { TodosRepository } from './controllers/todos/todos.repository';
import { TodosService } from './services/todos/todos.service';

@Module({
  imports: [TypeOrmModule.forFeature([Todo])],
  controllers: [TodosController],
  providers: [TodosService],
  exports: [TodosRepository]
})
export class TodosModule { }

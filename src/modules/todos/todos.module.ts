import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodosController } from './controllers/todos/todos.controller';
import { TodosRepository } from './controllers/todos/todos.repository';
import { TodosService } from './services/todos/todos.service';

@Module({
  imports: [TypeOrmModule.forFeature([TodosRepository])],
  controllers: [TodosController],
  providers: [TodosService],
})
export class TodosModule { }

import { Injectable } from '@nestjs/common';
import {
  DataSource,
  EntityRepository,
  EntityTarget,
  Repository,
} from 'typeorm';
import { AddTodoDto } from '../../dtos/add-todo.dto';
import { GetTodosFilterDto } from '../../dtos/get-todos-filter.dto';
import { TodoStatus } from '../../models/todo.model';
import { Todo } from './todos.entity';

export class TodosRepository extends Repository<Todo> {
  async getTodos(
    filterDto: GetTodosFilterDto,
  ): Promise<Todo[]> {
    const { status, search } = filterDto;
    const query = this.createQueryBuilder('todo');

    const todos = await query.getMany();

    return todos;
  }
  async addTodo(addTodoDto: AddTodoDto) {
    const { title, description } = addTodoDto;
    const todo = new Todo();
    todo.title = title;
    todo.description = description;
    todo.status = TodoStatus.OPEN;
    await todo.save();
    return todo;
  }
}

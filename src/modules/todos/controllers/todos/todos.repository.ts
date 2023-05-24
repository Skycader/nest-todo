import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddTodoDto } from '../../dtos/add-todo.dto';
import { GetTodosFilterDto } from '../../dtos/get-todos-filter.dto';
import { TodoStatus } from '../../models/todo.model';
import { User } from './../../../../auth/user.entity';
import { Todo } from './todos.entity';

@Injectable()
export class TodosRepository extends Repository<Todo> {
  constructor(
    @InjectRepository(Todo)
    private repository: Repository<Todo>,
  ) {
    super(
      repository.target,
      repository.manager,
      repository.queryRunner,
    );
  }
  public async getTodos(
    filterDto: GetTodosFilterDto,
  ): Promise<Todo[]> {
    const { status, search } = filterDto;
    const query =
      this.repository.createQueryBuilder('todo');

    const todos = await query.getMany();

    return todos;
  }
  public async addTodo(addTodoDto: AddTodoDto, user: User) {
    const { title, description } = addTodoDto;
    const todo = new Todo();
    todo.title = title;
    todo.description = description;
    todo.status = TodoStatus.OPEN;
    todo.user = user;
    console.log('USER');
    console.log(user);
    await todo.save();
    delete todo.user;
    return todo;
  }
}

import { EntityRepository, Repository } from 'typeorm';
import { AddTodoDto } from '../../dtos/add-todo.dto';
import { TodoStatus } from '../../models/todo.model';
import { Todo } from './todos.entity';

export class TodosRepository extends Repository<Todo> {
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

import { GetTodosFilterDto } from './../../dtos/get-todos-filter.dto';
import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { AddTodoDto } from '../../dtos/add-todo.dto';
import { TodoStatus } from '../../models/todo.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from '../../controllers/todos/todos.entity';
import { TodosRepository } from '../../controllers/todos/todos.repository';
@Injectable()
export class TodosService {
  // private todos: Todo[] = [];

  constructor(
    @InjectRepository(Todo)
    private todosRepository: TodosRepository,
  ) { }
  async getTodoById(id: number): Promise<Todo> {
    const found = await this.todosRepository.findOne({
      where: { id: id },
    });
    if (!found) {
      throw new NotFoundException(
        `Todo with id ${id} not found`,
      );
    }

    return found;
  }

  async addTodo(addTodoDto: AddTodoDto) {
    return this.todosRepository.addTodo(addTodoDto);
  }

  async removeTodoById(id: number) {
    return await this.todosRepository.delete(id);
  }

  /*
  getAllTodos(): Todo[] {
    return this.todos;
  }

  getTodosWithFilters(
    filterDto: GetTodosFilterDto,
  ): Todo[] {
    const { status, search } = filterDto;
    let todos = this.getAllTodos();

    if (status) {
      todos = todos.filter(
        (todo) => todo.status === status,
      );
    }

    if (search) {
      todos = todos.filter(
        (todo) =>
          todo.title.includes(search) ||
          todo.description.includes(search),
      );
    }

    return todos;
  }

  getTodoById(id: string) {
    const found = this.todos.find((todo) => todo.id == id);
    if (!found) {
      throw new NotFoundException(
        `Todo with such id ${id} not found`,
      );
    }
    return found;
  }

  addTodo(addTodoDto: AddTodoDto): Todo {
    const { title, description } = addTodoDto;
    const todo: Todo = {
      id: uuid(),
      title,
      description,
      status: TodoStatus.OPEN,
    };

    this.todos.push(todo);
    return todo;
  }

  updateTodo(id: string, status: TodoStatus): Todo {
    const todo = this.getTodoById(id);
    todo.status = status;
    return todo;
  }

  removeTodo(id: string): string {
    const found = this.getTodoById(id);
    this.todos = this.todos.filter(
      (todo) => todo.id != found.id,
    );
    return `Todo by id ${id} has been deleted`;
  }
  */
}

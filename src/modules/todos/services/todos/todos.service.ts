import { Injectable } from '@nestjs/common';
import { Todo, TodoStatus } from '../../models/todo.model';
import { v4 as uuid } from 'uuid';
import { AddTodoDto } from '../../dtos/add-todo.dto';
@Injectable()
export class TodosService {
  private todos: Todo[] = [];

  getAllTodos(): Todo[] {
    return this.todos;
  }

  getTodo(id: string) {
    return this.todos.find(todo => todo.id == id);
  }

  addTodo(addTodoDto: AddTodoDto): Todo {
    const { title, description } = addTodoDto
    const todo: Todo = {
      id: uuid(),
      title,
      description,
      status: TodoStatus.OPEN,
    };

    this.todos.push(todo);
    return todo;
  }
}

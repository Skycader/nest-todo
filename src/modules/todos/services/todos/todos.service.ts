import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { AddTodoDto } from '../../dtos/add-todo.dto';
import { Todo, TodoStatus } from '../../models/todo.model';
@Injectable()
export class TodosService {
  private todos: Todo[] = [];

  getAllTodos(): Todo[] {
    return this.todos;
  }

  getTodoById(id: string) {
    return this.todos.find((todo) => todo.id == id);
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
    this.todos = this.todos.filter((todo) => todo.id != id);
    return id;
  }
}

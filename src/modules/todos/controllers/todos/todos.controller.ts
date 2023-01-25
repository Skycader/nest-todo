import { TodosService } from './../../../todos/services/todos/todos.service';
import { Controller, Get } from '@nestjs/common';
import { Todo } from '../../models/todo.model';

@Controller('todos')
export class TodosController {
  constructor(private todosService: TodosService) {

  }

  @Get()
  getAllTodos():Todo[] {
    return this.todosService.getAllTodos()
  }
}

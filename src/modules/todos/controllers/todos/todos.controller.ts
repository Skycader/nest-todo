import { AddTodoDto } from './../../dtos/add-todo.dto';
import { TodosService } from './../../../todos/services/todos/todos.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Todo } from '../../models/todo.model';

@Controller('todos')
export class TodosController {
  constructor(private todosService: TodosService) {}

  @Get()
  getAllTodos(): Todo[] {
    return this.todosService.getAllTodos();
  }

  @Get('/:id')
  getTodoById(@Param('id') id: string ) {
    return this.todosService.
  }

  @Post()
  addTodo(
    @Body() addTodoDto: AddTodoDto
  ): Todo {
    return this.todosService.addTodo(addTodoDto);
  }
}

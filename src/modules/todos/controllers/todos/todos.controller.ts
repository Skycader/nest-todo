import { StatusValidatorPipe } from './../../pipes/status-validator/status-validator.pipe';
import { TodoStatus } from './../../models/todo.model';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Todo } from '../../models/todo.model';
import { TodosService } from './../../../todos/services/todos/todos.service';
import { AddTodoDto } from './../../dtos/add-todo.dto';

@Controller('todos')
export class TodosController {
  constructor(private todosService: TodosService) {}

  @Get()
  getAllTodos(): Todo[] {
    return this.todosService.getAllTodos();
  }

  @Get('/:id')
  getTodoById(@Param('id') id: string) {
    return this.todosService.getTodoById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  addTodo(@Body() addTodoDto: AddTodoDto): Todo {
    return this.todosService.addTodo(addTodoDto);
  }

  @Patch('/:id/status')
  updateTodo(
    @Param('id') id: string,
    @Body('status', StatusValidatorPipe) status: TodoStatus,
  ) {
    return this.todosService.updateTodo(id, status);
  }

  @Delete('/:id')
  removeTodo(@Param('id') id: string) {
    return this.todosService.removeTodo(id);
  }
}

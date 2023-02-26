import { TodoStatus } from "../models/todo.model";

export class GetTodosFilterDto {
  status: TodoStatus
  search: string
}
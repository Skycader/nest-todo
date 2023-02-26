import { IsIn, IsNotEmpty, IsOptional } from "class-validator";
import { TodoStatus } from "../models/todo.model";

export class GetTodosFilterDto {
  @IsOptional()
  @IsIn([TodoStatus.OPEN, TodoStatus.DONE, TodoStatus.IN_PROGRESS])
  status: TodoStatus

  @IsOptional()
  @IsNotEmpty()
  search: string
}
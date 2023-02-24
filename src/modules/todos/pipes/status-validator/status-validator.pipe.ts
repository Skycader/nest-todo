import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { TodoStatus } from '../../models/todo.model';

@Injectable()
export class StatusValidatorPipe implements PipeTransform {

  readonly allowedStatuses = [
    TodoStatus.OPEN,
    TodoStatus.IN_PROGRESS,
    TodoStatus.DONE,
  ]

  transform(value: TodoStatus, metadata: ArgumentMetadata) {
    if (
      !this.isStatusValid(value)
      ) {
      throw new BadRequestException(`Got invalid status: ${value}`)
    }
    return value.toUpperCase();
  }

  private isStatusValid(value: TodoStatus) {
    return this.allowedStatuses.includes(value);
  }
}

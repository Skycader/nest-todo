import {
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TodoStatus } from '../../models/todo.model';

export class Todo extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: TodoStatus;
}

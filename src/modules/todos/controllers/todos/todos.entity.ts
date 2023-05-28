import { User } from 'src/auth/user.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TodoStatus } from '../../models/todo.model';

@Entity()
export class Todo extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: TodoStatus;

  @ManyToOne((type) => User, (user) => user.todos, {
    eager: false,
  })
  user: User;

  @Column()
  userId: number;
}

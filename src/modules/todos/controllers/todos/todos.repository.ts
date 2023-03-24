import { Entity, Repository } from 'typeorm';
import { Todo } from './todos.entity';

@Entity(Todo)
export class TodosRepository extends Repository<Todo> {}

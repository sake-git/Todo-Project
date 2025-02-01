import { Component, ViewEncapsulation } from '@angular/core';
import { Todo } from '../../model/todo';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-todo',
  standalone: false,
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class TodoComponent {
  todos: Todo[];

  constructor(private todoService: TodoServiceService) {
    this.todos = todoService.getTodoList();
  }

  completeTask(i: number) {
    this.todoService.completeTask(i);
    this.todoService.getTodoList();
  }

  deleteTask(i: number) {
    this.todoService.deleteTask(i);
    this.todoService.getTodoList();
  }
}

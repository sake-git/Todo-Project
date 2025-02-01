import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../model/todo';

@Component({
  selector: 'app-todo-item',
  standalone: false,

  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
})
export class TodoItemComponent {
  @Output() onRemove: EventEmitter<number> = new EventEmitter();
  @Output() onComplete: EventEmitter<number> = new EventEmitter();
  @Input() todo: Todo | undefined;
  @Input() count: number = 0;

  completeTask(): void {
    this.onComplete.emit();
  }

  deleteTask(): void {
    this.onRemove.emit();
  }
}

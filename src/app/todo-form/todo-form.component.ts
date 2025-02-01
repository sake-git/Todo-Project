import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Todo } from '../../model/todo';

@Component({
  selector: 'app-todo-form',
  standalone: false,

  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css',
})
export class TodoFormComponent {
  @Output() onAddTodo: EventEmitter<Todo> = new EventEmitter<Todo>();
  myForm: FormGroup;
  todo: Todo = {
    task: '',
    completed: false,
    duration: 0,
    priority: 'Normal',
  };

  constructor() {
    this.myForm = new FormGroup({
      task: new FormControl('', Validators.required),
      duration: new FormControl(),
      priority: new FormControl('', Validators.required),
    });
  }

  addItem(myForm: FormGroup) {
    this.todo = myForm.value;
    this.todo.completed = false;
    this.onAddTodo.emit(this.todo);
    this.myForm.reset();
  }
}

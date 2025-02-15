import { Component, ViewEncapsulation } from '@angular/core';
import { Todo } from '../model/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'to-do-project';
  todos: Todo[];
  constructor() {
    this.todos = [
      { task: 'Fold Clothes', completed: true, duration: 2, priority: 'High' },
      {
        task: 'Put clothes in dresser',
        completed: true,
        duration: 0.5,
        priority: 'Normal',
      },
      { task: 'Call Mom', completed: false, duration: 0.75, priority: 'Low' },
      { task: 'Relax', completed: false, duration: 0, priority: 'Low' },
    ];
  }

  getTodoList(): Todo[] {
    return this.todos;
  }

  completeTask(i: number) {
    this.todos[i].completed = true;
  }

  deleteTask(i: number) {
    this.todos.splice(i, 1);
  }

  addTask(todo: Todo) {
    this.todos.push(todo);
    console.log('in main component ');
  }
}

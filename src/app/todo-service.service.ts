import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoServiceService {
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
}

export interface Todo {
  task: string;
  completed: boolean;
  duration: number;
  priority: 'Normal' | 'High' | 'Low';
}

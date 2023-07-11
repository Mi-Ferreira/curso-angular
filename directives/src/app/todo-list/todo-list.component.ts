import { Component } from '@angular/core';
import { TodoItem } from './todoItem';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  exibir: boolean = true;

  tasks: TodoItem[] = [
    { description: 'Arrumar a casa', done: false },
    { description: 'Cozinhar', done: false },
  ];

  tasksDone: TodoItem[] = [];

  addTask(description: string) {
    this.tasks.push({
      description: description,
      done: false,
    });
  }

  deleteTask(i: number) {
    this.tasks.splice(i, 1);
  }

  done(i: number, description: string) {
    this.tasks[i].done = true;
    this.tasks.splice(i, 1);
    this.tasksDone.push({
      description: description,
      done: true,
    });
  }
}

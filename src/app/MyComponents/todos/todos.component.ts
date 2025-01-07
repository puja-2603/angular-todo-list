import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Todo } from "../../Todo";
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { AddTodoComponent } from '../add-todo/add-todo.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, TodoItemComponent, AddTodoComponent],
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TodosComponent implements OnInit {
  localItem: string | null;
  todos: Todo[];

  constructor() {
    // Check if localStorage is available
    if (this.isLocalStorageAvailable()) {
      this.localItem = localStorage.getItem("todos");
    } else {
      this.localItem = null;
    }

    if (this.localItem === null) {
      this.todos = [];
    } else {
      this.todos = JSON.parse(this.localItem);
    }
  }

  ngOnInit(): void {}

  deleteTodo(todo: Todo): void {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
      this.updateLocalStorage();
    }
  }

  addTodo(todo: Todo): void {
    console.log(todo);
    this.todos.push(todo);
    this.updateLocalStorage();
  }
  toggleTodo(todo: Todo): void {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos[index].active=!this.todos[index].active;
    localStorage.setItem("todos", JSON.stringify(this.todos));
    // this.updateLocalStorage();
  }

  private updateLocalStorage(): void {
    if (this.isLocalStorageAvailable()) {
      localStorage.setItem("todos", JSON.stringify(this.todos));
    }
  }

  private isLocalStorageAvailable(): boolean {
    try {
      return typeof localStorage !== "undefined";
    } catch {
      return false;
    }
  }
}

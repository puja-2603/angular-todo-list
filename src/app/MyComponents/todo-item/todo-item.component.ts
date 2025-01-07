import { Component,Input,Output, EventEmitter,ViewEncapsulation } from '@angular/core';
import { Todo } from '../../Todo';
import { emit } from 'process';


@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css', 
  encapsulation: ViewEncapsulation.None
})
export class TodoItemComponent {
  @Input() todo!: Todo;
  @Input() i!: number;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();
  onClick(todo: Todo){
    this.todoDelete.emit(todo);
    console.log("onClick has been triggered")
  }
  onCheckboxClick(todo:Todo){
    this.todoCheckbox.emit(todo);
    // todo.active = !todo.active;
  }
}

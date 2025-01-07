import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TodosComponent } from './MyComponents/todos/todos.component';
import { FormsModule } from '@angular/forms';
import { AddTodoComponent } from './MyComponents/add-todo/add-todo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TodosComponent,FormsModule,AddTodoComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cwh-todo-list';
  constructor(){
    // setTimeout(()=>{
    //   this.title="Changed Title"
    // },2000);
  };
}

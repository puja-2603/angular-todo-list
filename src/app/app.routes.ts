import { Routes } from '@angular/router';
import { TodosComponent } from './MyComponents/todos/todos.component';
import { AboutComponent } from './MyComponents/about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


export const routes: Routes =[
    { path: '', component: TodosComponent },
    { path: 'about', component: AboutComponent },
  ];

  @NgModule({
   
    imports: [
      RouterModule.forRoot(routes),
    ],
    exports: [RouterModule]
  })
  export class AppModule {}
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { Todo1Component } from './todo1/todo1.component';
import { Todo2Component } from './todo2/todo2.component';
import { ItemsComponent } from './items/items.component';


const routes: Routes = [

  {
    path: '',
    component: Todo1Component,
    pathMatch: 'full'
  },
  {
    path: 'todo2',
    component: Todo2Component,
    children: [
      {
        path: 'item/:id',
        component: ItemsComponent
      }
    ]
  },
  {
    path: 'samplenote',
    component: TodoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

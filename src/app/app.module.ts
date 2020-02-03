import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatInputModule, MatSelectModule, MatCheckboxModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { Todo1Component } from './todo1/todo1.component';
import { Todo2Component } from './todo2/todo2.component';
import { AppService } from './app.service';
import { ItemsComponent } from './items/items.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    Todo1Component,
    Todo2Component,
    ItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatInputModule, MatSelectModule, MatCheckboxModule,
    BrowserAnimationsModule,
    FormsModule, RouterModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }

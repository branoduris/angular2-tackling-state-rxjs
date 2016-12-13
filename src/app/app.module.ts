import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodoList } from './todo-list/todo-list.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { FilterSelectorComponent } from './filter-selector/filter-selector.component';
import { FilterLink } from './filter-selector/filter-link/filter-link.component';
import { TodoComponent } from './todo-list/todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoList,
    AddTodoComponent,
    FilterSelectorComponent,
    FilterLink,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

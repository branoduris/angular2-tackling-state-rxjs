import { Component, Inject } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { AppState, stateAndDispatcher, state } from './shared/';
import { TodoList} from './todo-list';
import { FilterSelectorComponent } from './filter-selector/';
import { AddTodoComponent } from './add-todo/';

@Component({
  selector: 'app-root',
  template: `
    <filter-selector></filter-selector>
    <add-todo></add-todo>
    <todo-list></todo-list>
  `,
  providers: stateAndDispatcher,
})
export class AppComponent {
  constructor(@Inject(state) private state: Observable<AppState>) {
    // nothing to do here
  }
}

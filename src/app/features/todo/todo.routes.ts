import { Routes } from '@angular/router';
import { TodoListPageComponent } from './pages/todo-list-pag/todo-list-page.component';

export const todoRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/todo-list-pag/todo-list-page.component').then((m) => m.TodoListPageComponent),
  },
  {
    path: ':id',
    loadComponent: () =>
      import('./pages/todo-detail-page/todo-detail-page.component').then(
        (m) => m.TodoDetailPageComponent
      ),
  },
];

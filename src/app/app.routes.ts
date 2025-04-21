import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'todos',
    pathMatch: 'full',
  },
  {
    path: 'todos',
    loadChildren: () => import('./features/todo/todo.routes').then((m) => m.todoRoutes),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./features/user/components/login-page/login-page.component').then(
        (m) => m.LoginPageComponent
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./features/not-found/not-found.component').then((m) => m.NotFoundComponent),
  },
];

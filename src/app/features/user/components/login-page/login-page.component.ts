import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import * as UserActions from '../../state/user.actions';
import { User } from '../../state/user.model';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  constructor(private store: Store) {}

  mockLogin() {
    const mockUser: User = {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
    };
    this.store.dispatch(UserActions.setUser({ user: mockUser }));
  }
}

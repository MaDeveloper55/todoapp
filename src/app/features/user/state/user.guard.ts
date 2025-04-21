import { Injectable } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCurrentUser } from './user.selectors';
import { map } from 'rxjs';

export const userGuard: CanActivateFn = () => {
  const store = inject(Store);
  return store.select(selectCurrentUser).pipe(map((user) => !!user));
};

import { Injectable } from '@angular/core';
import { TodoList } from './todo.model';

const STORAGE_KEY = 'todos';

@Injectable({ providedIn: 'root' })
export class TodoService {
  getTodoLists(): TodoList[] {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  }

  saveTodoLists(lists: TodoList[]): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lists));
  }
}

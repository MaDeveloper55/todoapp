import { Injectable } from '@angular/core';
import { TodoList } from './todo.model';
import { HttpClient } from '@angular/common/http';
import { v4 as uuidv4 } from 'uuid';
import { Observable } from 'rxjs';

const STORAGE_KEY = 'todos';

@Injectable({ providedIn: 'root' })
export class TodoService {
  private apiUrl = 'http://localhost:5000/api';
  private lists: TodoList[] = [];

  constructor(private http: HttpClient) {}

  getTodoLists(): TodoList[] {
    const storedLists = localStorage.getItem(STORAGE_KEY);
    this.lists = storedLists ? JSON.parse(storedLists) : [];
    this.syncWithBackend();
    return this.lists;
  }

  private syncWithBackend(): void {
    const todoLists = this.lists;
    this.http.post(`${this.apiUrl}/lists/sync`, { todoLists }).subscribe({
      next: (response) => {
        console.log('Successfully synced with the backend');
      },
      error: (err) => {
        console.error('Failed to sync with the backend', err);
      },
    });
  }

  saveTodoLists(lists: TodoList[]): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lists));
    this.lists = lists;
    this.syncWithBackend();
  }

  createTodoList(title: string): Observable<TodoList> {
    const newList = { id: uuidv4(), title, tasks: [] };
    return this.http.post<TodoList>(`${this.apiUrl}/lists`, newList);
  }

  addTask(
    listId: string,
    task: { id: string; title: string; description: string }
  ): Observable<any> {
    return this.http.post(`${this.apiUrl}/lists/${listId}/tasks`, task);
  }
}

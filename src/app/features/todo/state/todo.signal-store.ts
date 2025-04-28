import { computed, inject, signal } from '@angular/core';
import { TodoList, Task } from '../todo.model';
import { TodoService } from '../todo.service';
import { v4 as uuidv4 } from 'uuid';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TodoSignalStore {
  private readonly todoService = inject(TodoService);

  private readonly todoLists = signal<TodoList[]>(this.todoService.getTodoLists());
  private readonly selectedListId = signal<string | null>(null);

  readonly lists = computed(() => this.todoLists());
  readonly selectedList = computed(() =>
    this.todoLists().find((list) => list.id === this.selectedListId())
  );

  selectList(id: string) {
    this.selectedListId.set(id);
  }

  addList(title: string) {
    const newList: TodoList = {
      id: uuidv4(),
      title,
      tasks: [],
    };
    const updated = [...this.todoLists(), newList];
    this.todoLists.set(updated);
    this.todoService.saveTodoLists(updated);
    this.todoService.createTodoList(title).subscribe({
      next: (list) => {
        console.log('List successfully created on backend:', list);
      },
      error: (err) => {
        console.error('Failed to create list on backend:', err);
      },
    });
  }

  addTask(listId: string, title: string, description: string) {
    const updated = this.todoLists().map((list) =>
      list.id === listId
        ? {
            ...list,
            tasks: [
              ...list.tasks,
              {
                id: uuidv4(),
                title,
                description,
                completed: false,
              },
            ],
          }
        : list
    );
    this.todoLists.set(updated);
    this.todoService.saveTodoLists(updated); // Save to LocalStorage
    this.todoService.addTask(listId, { id: uuidv4(), title, description }).subscribe({
      next: (task) => {
        console.log('Task successfully added to backend:', task);
      },
      error: (err) => {
        console.error('Failed to add task on backend:', err);
      },
    });
  }

  toggleTask(listId: string, taskId: string) {
    const updated = this.todoLists().map((list) =>
      list.id === listId
        ? {
            ...list,
            tasks: list.tasks.map((task) =>
              task.id === taskId ? { ...task, completed: !task.completed } : task
            ),
          }
        : list
    );
    this.todoLists.set(updated);
    this.todoService.saveTodoLists(updated);
  }
}

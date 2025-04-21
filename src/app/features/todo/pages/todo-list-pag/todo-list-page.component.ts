import { Component, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { TodoSignalStore } from '../../state/todo.signal-store';
import { Task } from '../../todo.model';

@Component({
  selector: 'app-todo-list-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
  ],
  templateUrl: './todo-list-page.component.html',
  styleUrl: './todo-list-page.component.scss',
})
export class TodoListPageComponent {
  store = inject(TodoSignalStore);
  newListTitle = '';

  addList() {
    if (!this.newListTitle.trim()) return;
    this.store.addList(this.newListTitle.trim());
    this.newListTitle = '';
  }

  getCompletedTaskCount(tasks: Task[]): number {
    return tasks.filter((t) => t.completed).length;
  }
}

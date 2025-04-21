import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { TodoSignalStore } from '../../state/todo.signal-store';
import { AddTaskComponent } from '../../components/add-task/add-task.component';
import { TodoList } from '../../todo.model';
import { TodoItemComponent } from '../../components/todo-item/todo-item.component';

@Component({
  selector: 'app-todo-detail-page',
  standalone: true,
  imports: [CommonModule, RouterModule, TodoItemComponent, AddTaskComponent],
  templateUrl: './todo-detail-page.component.html',
  styleUrl: './todo-detail-page.component.scss',
})
export class TodoDetailPageComponent implements OnInit {
  store = inject(TodoSignalStore);
  private route = inject(ActivatedRoute);

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.store.selectList(id);
    }
  }

  get selectedList(): TodoList | undefined {
    return this.store.selectedList();
  }

  onAddTask(event: { title: string; description: string }) {
    const list = this.store.selectedList();
    if (list) {
      this.store.addTask(list.id, event.title, event.description);
    }
  }

  onToggle(taskId: string) {
    const list = this.store.selectedList();
    if (list) {
      this.store.toggleTask(list.id, taskId);
    }
  }
}

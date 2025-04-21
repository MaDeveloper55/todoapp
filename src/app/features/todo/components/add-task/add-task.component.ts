import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule, MatButtonModule, MatFormFieldModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss',
})
export class AddTaskComponent {
  title = '';
  description = '';
  @Output() create = new EventEmitter<{ title: string; description: string }>();

  add() {
    if (!this.title.trim()) return;
    this.create.emit({
      title: this.title.trim(),
      description: this.description.trim(),
    });
    this.title = '';
    this.description = '';
  }
}

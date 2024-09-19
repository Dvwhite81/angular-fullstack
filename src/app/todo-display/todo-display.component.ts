import { Component, Input } from '@angular/core';
import { TodoType } from '../todo-type';
import { TodoDetailComponent } from '../todo-detail/todo-detail.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-display',
  standalone: true,
  imports: [CommonModule, TodoDetailComponent],
  templateUrl: './todo-display.component.html',
  styleUrl: './todo-display.component.css',
})
export class TodoDisplayComponent {
  @Input() todoList!: TodoType[];
}

import { Component, Input, input } from '@angular/core';
import { TodoType } from '../todo-type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-detail',
  standalone: true,
  imports: [],
  templateUrl: './todo-detail.component.html',
  styleUrl: './todo-detail.component.css',
})
export class TodoDetailComponent {
  @Input() todo!: TodoType;
}

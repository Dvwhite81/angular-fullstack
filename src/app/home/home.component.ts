import { Component, Input } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { TodoDisplayComponent } from '../todo-display/todo-display.component';
import { TodoType } from '../todo-type';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, TodoDisplayComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  @Input() title!: string;

  todoList: TodoType[] = [
    {
      id: '0',
      title: 'Number One',
      content: 'first todo is not complete',
      completed: false,
    },
    {
      id: '1',
      title: 'Number Two',
      content: 'second todo is complete',
      completed: true,
    },
    {
      id: '2',
      title: 'Number Three',
      content: 'third todo is not complete',
      completed: false,
    },
  ];
}

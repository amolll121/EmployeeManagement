import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
//import { Employee } from './employee/employee';

@Component({
  imports: [RouterOutlet, RouterLink],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('employee-management');
}

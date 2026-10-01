import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Employee } from './employee/employee';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'employees', component: Employee }
];
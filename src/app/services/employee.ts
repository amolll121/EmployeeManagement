import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private http = inject(HttpClient);

  getEmployees() {
    return this.http.get('https://localhost:7192/api/Employee');
  }

    getEmployeeNames() {
    return this.http.get<any[]>('https://localhost:7192/api/Employee').pipe(
      map(data => data.map(emp => emp.name))
    );
  }
  
  addEmployee(employee: any) {
  return this.http.post(
    'https://localhost:7192/api/Employee',
    employee
  );
  

  
}

}
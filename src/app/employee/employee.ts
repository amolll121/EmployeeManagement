import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../services/employee';
import { EmployeeCard } from '../employee-card/employee-card';

@Component({
  selector: 'app-employee',
  imports: [FormsModule, EmployeeCard],
  templateUrl: './employee.html',
  styleUrl: './employee.css'
})
export class Employee {

  private employeeService = inject(EmployeeService);

  employees: any[] = [];
  nameInput = '';
  isDisabled = false;

  ngOnInit() {
  this.employeeService.getEmployees().subscribe({
    next: (data) => {
      this.employees = data as any[];
    },
    error: (err) => {
      console.log(err);
      alert('Unable to load employees');
    }
  });
}

  showMessage() {
    alert('Employee button clicked!');
  }

  saveEmployee() {
  const employee = {
    name: 'Priya',
    age: 26,
    salary: 35000
  };

  this.employeeService.addEmployee(employee).subscribe(data => {
  console.log(data);
  alert('Employee added successfully!');

  this.employeeService.getEmployees().subscribe(data => {
    this.employees = data as any[];
  });
});
}
}
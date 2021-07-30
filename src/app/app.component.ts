import { Component } from '@angular/core';

import { Employee } from './models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularCRUD'; 

  employees: Employee[] = [
    {id: 1, name: "César"},
    {id: 2, name: "Obed"},
    {id: 3, name: "Figueroa"},
    {id: 4, name: "Luna"}
  ];

  selectedEmployee: Employee = new Employee();

  addEmployee() {
    if (this.selectedEmployee.id === 0) {
      this.selectedEmployee.id = this.employees.length + 1;
      this.employees.push(this.selectedEmployee);
    }
    this.selectedEmployee = new Employee();
  }

  editEmployee(e: Employee) {
    this.selectedEmployee = e;
  }

  deleteEmployee() {
    if (confirm("Are you sure?...")) {
      this.employees = this.employees.filter(x => x != this.selectedEmployee);
      this.selectedEmployee = new Employee();
    }
  }

  cleanForm() {
    this.selectedEmployee = new Employee();
  }
}

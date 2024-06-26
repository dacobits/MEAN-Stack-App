import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  URL_API = 'https://mean-stack-server.onrender.com/api/employees';

  selectedEmployee: Employee = {
    name: '',
    position: '',
    salar: 0,
  };

  employees!: Employee[];

  constructor(private http: HttpClient) {}

  getEmployees() {
    return this.http.get<Employee[]>(this.URL_API);
  }

  createEmployee(employee: Employee) {
    return this.http.post(this.URL_API, employee);
  }

  updateEmployee(employee: Employee) {
    return this.http.put(`${this.URL_API}/${employee._id}`, employee);
  }

  deleteEmployee(_id: string | undefined) {
    return this.http.delete(`${this.URL_API}/${_id}`);
  }
}

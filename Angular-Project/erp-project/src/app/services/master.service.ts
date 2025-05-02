import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee, IApiResponse } from '../model/Employee';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }

  getParentDept() {
    return this.http.get<IApiResponse>("/api/EmployeeManagement/GetParentDepartment")
  }

  getEmpList() {
    return this.http.get<Employee[]>("/api/EmployeeManagement/GetAllEmployees")
  }
}

import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../services/master.service';
import { Employee, IApiResponse, IParentDept } from '../model/Employee';

@Component({
  selector: 'app-employee',
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {
  
  parentDeptList: IParentDept[] = []
  employeeObj: Employee = new Employee();
  empList: Employee[] = [];

  masterService = inject(MasterService)

  ngOnInit(): void {
      this.getParentDeptList();
      this.getEmpList();
  }

  getParentDeptList() {
    this.masterService.getParentDept().subscribe((res: IApiResponse) => {
      this.parentDeptList = res.data;
      console.log(res.data);
    });
  }

  getEmpList() {
    this.masterService.getEmpList().subscribe((res: Employee[]) => {
      this.empList = res;
      console.log(res);
    });
  }

}

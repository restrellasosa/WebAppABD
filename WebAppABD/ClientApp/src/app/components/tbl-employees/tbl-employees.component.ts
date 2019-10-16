import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service'

@Component({
  selector: 'tbl-employees',
  templateUrl: './tbl-employees.component.html',
  styleUrls: ['./tbl-employees.component.css']
})
export class TblEmployeesComponent implements OnInit {

    personas: any;
    cabeceras: string[] = ["ID Empleado", "TitleOfCourtesy", "FullName", "Address", "HomePhone"];

    constructor(private employeeService: EmployeeService) { }

    ngOnInit() {
        this.employeeService.getEmployee().subscribe(data=> this.personas = data);
  }

}

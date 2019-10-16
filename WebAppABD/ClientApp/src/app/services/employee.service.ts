import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class EmployeeService {
    urlBase: string = "";
    constructor(private http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.urlBase = baseUrl;
    }

    public getEmployee() {
        return this.http.get(this.urlBase + "api/Employees/EmployeesList").map(res => res.json());
    }
}

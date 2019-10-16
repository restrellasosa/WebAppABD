import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class CategoryService {
    urlBase: string;

    constructor(private http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.urlBase = baseUrl;
    }


    public getCategory() {
        return this.http.get(this.urlBase + "api/Category/CategoryList").map(res => res.json());
    }
}

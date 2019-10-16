import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class ProductoService {
    urlBase: string = "";
    constructor(private http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.urlBase = baseUrl;
    }

    public getProducto() {
        return this.http.get(this.urlBase + "api/Product/ProductList").map(res => res.json());
    }

    public getFilterProductListByName(nombre) {
        return this.http.get(this.urlBase + "api/Product/FilterProductListByName/" + nombre).map(res => res.json());
    }

    public getFilterProductListByCategoria(idcategoria) {
        return this.http.get(this.urlBase + "api/Product/FilterProductListbyCategory/" + idcategoria).map(res => res.json());
    }
}

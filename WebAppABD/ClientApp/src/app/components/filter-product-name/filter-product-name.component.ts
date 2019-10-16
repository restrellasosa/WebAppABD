import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/Producto.Services'

@Component({
  selector: 'filter-product-name',
  templateUrl: './filter-product-name.component.html',
  styleUrls: ['./filter-product-name.component.css']
})

export class FilterProductNameComponent implements OnInit {
    productos:any;
    constructor(private productoService: ProductoService) {
    }

  ngOnInit() {
  }
    filtrarDatos(nombre) {
        if (nombre.value == "") {
            this.productoService.getProducto().subscribe(data => this.productos=data);
        } else {
            this.productoService.getFilterProductListByName(nombre.value).subscribe(data => this.productos=data);
                
        }
    }

    limpiar(nombre) {
        nombre.value = "";
        this.productoService.getProducto().subscribe(data => this.productos = data);
    }
}

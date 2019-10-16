import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/Producto.Services'

@Component({
  selector: 'filter-product-category',
  templateUrl: './filter-product-category.component.html',
  styleUrls: ['./filter-product-category.component.css']
})
export class FilterProductCategoryComponent implements OnInit {
    productos: any;

    constructor(private productoService: ProductoService) { }

  ngOnInit() {
  }

   buscar(categoria) {
        if (categoria.value == "") {
            this.productoService.getProducto().subscribe(rpta => this.productos = rpta);
        } else {
            this.productoService.getFilterProductListByCategoria(categoria.value).subscribe(rpta => this.productos = rpta);
        }
    }

    limpiar(categoria) {
        categoria.value = "";
        this.productoService.getProducto().subscribe(rpta => this.productos = rpta);
    }
}

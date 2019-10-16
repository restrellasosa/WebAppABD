import { Component, OnInit, Input } from '@angular/core';
import { ProductoService } from '../../services/Producto.Services'

@Component({
  selector: 'tbl-producto',
  templateUrl: './tbl-producto.component.html',
  styleUrls: ['./tbl-producto.component.css']
})
export class TblProductoComponent implements OnInit {

    @Input() productos: any;
    cabeceras: string[] = ["Id Producto", "Nombre", "Precio", "Stock", "Nombre Categoria"]

    constructor(private producto: ProductoService) {

    }

    ngOnInit() {
        this.producto.getProducto().subscribe(
            data => this.productos = data);
  }

}

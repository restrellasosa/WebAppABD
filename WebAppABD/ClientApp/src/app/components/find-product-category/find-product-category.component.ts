import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CategoryService } from '../../services/category.service'


@Component({
  selector: 'find-product-category',
  templateUrl: './find-product-category.component.html',
  styleUrls: ['./find-product-category.component.css']
})
export class FindProductCategoryComponent implements OnInit {

    categorias: any;

    @Output() clickBuscar: EventEmitter<any>;
    @Output() clickLimpiar: EventEmitter<any>;


    constructor(private categoriaService: CategoryService) {
        this.clickBuscar = new EventEmitter();
        this.clickLimpiar = new EventEmitter();
    }

    ngOnInit() {
        this.categoriaService.getCategory().subscribe(
            p => this.categorias = p);
    }

    public buscar(categoria) {
        this.clickBuscar.emit(categoria);
    }

    public limpiar(categoria) {
        this.clickLimpiar.emit(categoria);
    }

}

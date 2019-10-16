import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'find-product',
    templateUrl: './find-product.component.html',
    styleUrls: ['./find-product.component.css']
})
export class FindProductComponent implements OnInit {
    @Output() clickButton: EventEmitter<any>;
    @Output() limpiarButton: EventEmitter<any>;

    constructor() {
        this.clickButton = new EventEmitter();
        this.limpiarButton = new EventEmitter();
    }

    ngOnInit() {
    }

    filter(nombre) {
        this.clickButton.emit(nombre);        
    }

  limpiar(nombre) {
        this.limpiarButton.emit(nombre);
    }
}

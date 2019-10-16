import { Component } from '@angular/core'

@Component({
    selector: "diasSemana",
    templateUrl: "./diasSemana.component.html"
})

export class DiasSemana {
    nombre: string = "Rigobrto";
    cursos: string[] = ["LINQ", "Ado.net", "Asp.net MVC"];
    persona: Object = {
        nombre: "Pepe",
        apellido: "Pérez"
    }
    enlace: string = "https://getcomposer.org/download/";
}

import { Component, OnInit } from '@angular/core';
import { IPaises } from './paises.interface';
import { PaisesService } from './paises.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent {
  monedaSeleccionada: string = '';
  monedaPais: IPaises[] = [];

  mostrarError = false;

  constructor(private paisesService: PaisesService) {}

  getMoneda() {
    this.paisesService.getMoneda(this.monedaSeleccionada).subscribe({
      next: (data: IPaises[]) => {
        console.log(data);
        this.monedaPais = data;

        this.mostrarError = false;
      },
      error: (err) => (this.mostrarError = true),
      complete: () => console.log('ok')
    })
  }
}

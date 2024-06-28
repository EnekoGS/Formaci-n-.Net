import { Component, OnInit } from '@angular/core';
import { IPaises } from './pais.interface';
import { PaisService } from './pais.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html'
})
export class PaisesComponent {
  monedaSeleccionada: string = '';
  monedaPais: IPaises[] = [];

  mostrarError = false;

  constructor(private paisService: PaisService) {}

  getMoneda() {
    this.paisService.getMoneda(this.monedaSeleccionada).subscribe({
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

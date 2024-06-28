import { Component } from '@angular/core';
import { IPaises } from '../pais.interface';
import { RouterModule, Router } from '@angular/router';
import { PaisService } from '../pais.service';

@Component({
  selector: 'app-paises',
  templateUrl: './consulta-paises.component.html',
  styleUrls: ['./consulta-paises.component.css']
})
export class ConsultaPaisesComponent {
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

  getPaisesGenerico() {
    this.paisService.get<IPaises[]>(`https://restcountries.com/v3.1/currency/${this.monedaSeleccionada}`).subscribe({
      next: (data) => {
        console.log(data);
        this.monedaPais = data;
      },
      error: (err) => console.log(err),
      complete: () => console.log('OK')
    });
  }
}


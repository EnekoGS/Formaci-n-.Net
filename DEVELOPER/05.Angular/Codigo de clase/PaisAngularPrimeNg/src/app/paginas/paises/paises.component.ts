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

  cols: any[] = [];
  
  constructor(private paisesService: PaisesService) {
    this.cols = [
      { field: 'name.common', header:'Pais' },
      { field: 'capital', header:'Capital' },
      { field: 'flags.png', header:'Bandera' },
      { field: 'pais.maps.googlemaps', header:'Mapa' }
    ];
  }

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

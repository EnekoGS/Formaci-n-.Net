import { Component, Input } from '@angular/core';
import { IPaises } from '../pais.interface';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent {
  @Input() monedaPais: IPaises[] = [];

  constructor() {}
  
}

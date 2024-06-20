import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-pipes',
  templateUrl: './angular-pipes.component.html',
  styleUrls: ['./angular-pipes.component.css']
})
export class AngularPipesComponent {
  nombre = 'Juan Luis ochoa';
  fechaActual = new Date();
  facturacion = 1099898.5454;
  porcentaje = 0.21;
}
/*
ng g c pipes/pipesPersonalizados
ng g p pipes/almacenamientoArchivos
ng g p pipes/almacenamientoArchivosMultiple
ng g p pipes/distancias
*/
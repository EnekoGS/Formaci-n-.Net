import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'comisiones'
})
export class ComisionesPipe implements PipeTransform {
  // Actividad
  // Desarrollar un pipe que, pasando unas ventas devuelva unas comisiones 
  // Criterio para las comisiones: Si las ventas son inferiores a 1000 serán un 10% sobre las ventas y si no un 20%
  transform(ventas: number): number {
    if (ventas < 1000) {
      return ventas * .10;
    } else {
      return ventas * .20;
    }
  }
}

/* 
transform(ventas: number): number {
    let comisiones;
    if (ventas < 1000) {
      comisiones = ventas * 0.1;
      return comisiones
    }
    else {
      comisiones = ventas * 0.2;
      return comisiones
    }
  }
}
*/
import { Component } from '@angular/core';
import { ITarea } from 'src/app/interfaces/tarea.interface';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent {
    
    misTareas: ITarea[] = [
    {
      descripcion: 'Comer',
      realizada: true,
      tareasImportantes: true
    },
    {
      descripcion: 'Viajar',
      realizada: false,
      tareasImportantes: true
    },
    {
      descripcion: 'Conducir',
      realizada: true,
      tareasImportantes: true
    }
  ];

  descripcion: string = '';
  realizada = false;
  tareasImportantes = false;

  agregarTarea() {
    const nuevaTarea: ITarea = {
      descripcion: this.descripcion,
      realizada: this.realizada,
      tareasImportantes: this.tareasImportantes
    };
    this.misTareas.push(nuevaTarea);
    this.descripcion = '';
    this.realizada = false;
  }
  eliminarTarea(posicion: number) {
    this.misTareas.splice(posicion, 1);
  }

  priorizarTarea(posicion: number) {
    this.misTareas[posicion].tareasImportantes = !this.misTareas[posicion].tareasImportantes;
  }
}

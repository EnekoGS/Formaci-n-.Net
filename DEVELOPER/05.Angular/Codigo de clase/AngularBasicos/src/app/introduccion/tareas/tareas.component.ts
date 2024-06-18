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
      realizada: true
    },
    {
      descripcion: 'Viajar',
      realizada: false
    },
    {
      descripcion: 'Conducir',
      realizada: true
    }
  ];

  descripcion: string = '';
  realizada = false;

  agregarTarea() {
    const nuevaTarea: ITarea = {
      descripcion: this.descripcion,
    }
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {
  nombre = 'Juan Luis';
  n1: number = 2;
  n2 = 3;
  logo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/2048px-LEGO_logo.svg.png';
  verImagen = true;
  habilitado = true;
  logoCircular = false;
  texto='';
  textoNombre='';
  textoApellido='';
  nota: number = 0;
  
  

  cambiarNombre() {
    if (this.nombre === 'Juan Luis') {
      this.nombre = 'Pedro';
    } else {
      this.nombre = 'Juan Luis';
    }
  }

  mostrarOcultarImagen() {
    // if (this.verImagen === true) {
    //   this.verImagen = false;
    // } else {
    //   this.verImagen = true;
    // }
    this.verImagen = !this.verImagen;
  }

  
// Actividad: Incluir un input. Deshabilitarlo/habilitarlo al pulsar un botón
// Actividad: Crearse una clase css que ponga una imagen circular
// Al pulsar un botón, poner todas las imágenes de la página circulares

  deshabilitarHabilitar() {
    this.habilitado = !this.habilitado;
  }

  invertirCircular() {
    this.logoCircular = !this.logoCircular;
  }
  
}

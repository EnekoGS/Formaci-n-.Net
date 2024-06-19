import { Component } from '@angular/core';
import { ICliente } from 'src/app/interfaces/cliente.interface';

@Component({
  selector: 'app-formulario-clientes',
  templateUrl: './formulario-clientes.component.html',
  styleUrls: ['./formulario-clientes.component.css']
})
export class FormularioClientesComponent {
  cliente: ICliente = {
    nombre: '',
    categoria: '',
    email: '',
    facturacionAnual: 0,
    localidad: ''
  };
  
  aplicar() {
    console.log(this.cliente);
    this.cliente = {
      nombre: '',
      categoria: '',
      email: '',
      facturacionAnual: 0,
      localidad: ''
    }
  }
}

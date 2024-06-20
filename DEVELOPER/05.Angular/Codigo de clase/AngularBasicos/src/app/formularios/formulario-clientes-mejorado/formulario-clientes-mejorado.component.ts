import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ICliente } from 'src/app/interfaces/cliente.interface';

@Component({
  selector: 'app-formulario-clientes-mejorado',
  templateUrl: './formulario-clientes-mejorado.component.html',
  styleUrls: ['./formulario-clientes-mejorado.component.css']
})
export class FormularioClientesMejoradoComponent implements OnInit {

  // ViewChild nos va a permitir seleccionar del DOM aquello que tiene #formulario. miFormulario es un alias
  @ViewChild('formulario') formularioClientes!: NgForm;
  // La categoria del producto será una lista desplegable con los valores: hogar, alimientación y tecnología

  categorias = [
    {value: 'hogar', display: 'Hogar'},
    {value: 'alimentacion', display:'Alimentación'},
    {value: 'tecnologia', display:'Tecnología'}
  ];
  cliente: ICliente;

  constructor() {
    this.cliente = {
      nombre: '',
      categoria: this.categorias[0].value,
      email: '',
      facturacionAnual: 0,
      localidad: '',
      moroso: false
    };
  }

  ngOnInit() {}

  guardar() {
    console.log(this.formularioClientes.value);
    console.log(this.cliente);
    this.formularioClientes.reset({
      nombre: '',
      categoria: this.categorias[0].value,
      email: '',
      facturacionAnual: 0,
      localidad: '',
    });
  }
}



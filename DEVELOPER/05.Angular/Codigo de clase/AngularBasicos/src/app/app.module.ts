import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BindingComponent } from './introduccion/binding/binding.component';
import { FormsModule } from '@angular/forms';
import { DirectivasComponent } from './introduccion/directivas/directivas.component';
import { ActividadNgForComponent } from './introduccion/actividad-ng-for/actividad-ng-for.component';
import { AmigosComponent } from './introduccion/amigos/amigos.component';
import { TareasComponent } from './introduccion/tareas/tareas.component';
import { FormularioUsuariosComponent } from './formularios/formulario-usuarios/formulario-usuarios.component';
import { FormularioClientesComponent } from './formularios/formulario-clientes/formulario-clientes.component';
import { FormularioUsuariosMejoradoComponent } from './formularios/formulario-usuarios-mejorado/formulario-usuarios-mejorado.component';
import { FormularioClientesMejoradoComponent } from './formularios/formulario-clientes-mejorado/formulario-clientes-mejorado.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    DirectivasComponent,
    ActividadNgForComponent,
    AmigosComponent,
    TareasComponent,
    FormularioUsuariosComponent,
    FormularioClientesComponent,
    FormularioUsuariosMejoradoComponent,
    FormularioClientesMejoradoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

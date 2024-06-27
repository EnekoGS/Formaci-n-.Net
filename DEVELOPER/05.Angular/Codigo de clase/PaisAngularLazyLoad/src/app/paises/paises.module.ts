import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaPaisesComponent } from './consulta-paises/consulta-paises.component';
import { PaisesComponent } from './paises.component';
import { PaisesRoutingModule } from './paises.routing.module';



@NgModule({
  declarations: [
    ConsultaPaisesComponent,
    PaisesComponent
  ],
  imports: [
    CommonModule,
    PaisesRoutingModule
  ]
})
export class PaisesModule { }

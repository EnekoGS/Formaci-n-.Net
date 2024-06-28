import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaPaisesComponent } from './consulta-paises/consulta-paises.component';
import { PaisesComponent } from './paises.component';
import { PaisesRoutingModule } from './paises.routing.module';
import { FormsModule } from '@angular/forms';
import { TablaPaisesComponent } from './tabla-paises/tabla-paises.component';
import { PaisService } from './pais.service';

@NgModule({
  declarations: [
    ConsultaPaisesComponent,
    PaisesComponent,
    TablaPaisesComponent
  ],
  imports: [
    CommonModule,
    PaisesRoutingModule,
    FormsModule
  ],
  providers: [
    PaisService
  ]
})
export class PaisesModule { }

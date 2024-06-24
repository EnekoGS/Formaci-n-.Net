import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaRecetasComponent } from './consulta-recetas/consulta-recetas.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ConsultaRecetasComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class RecetasModule { }

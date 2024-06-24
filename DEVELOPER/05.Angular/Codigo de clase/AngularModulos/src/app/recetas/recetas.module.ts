import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaRecetasComponent } from './consulta-recetas/consulta-recetas.component';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';



@NgModule({
  declarations: [
    ConsultaRecetasComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TableModule
  ]
})
export class RecetasModule { }

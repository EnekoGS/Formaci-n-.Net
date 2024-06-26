import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PaisesComponent } from './paises/paises.component';
import { Error404Component } from './error404/error404.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    HomeComponent,
    PaisesComponent,
    Error404Component
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    TableModule
  ],
  exports: [
    HomeComponent,
    PaisesComponent,
    Error404Component
  ]
})
export class PaginasModule { }

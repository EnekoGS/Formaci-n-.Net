import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BindingComponent } from './introduccion/binding/binding.component';
import { FormsModule } from '@angular/forms';
import { DirectivasComponent } from './introduccion/directivas/directivas.component';
import { ActividadNgForComponent } from './introduccion/actividad-ng-for/actividad-ng-for.component';
import { AmigosComponent } from './introduccion/amigos/amigos.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    DirectivasComponent,
    ActividadNgForComponent,
    AmigosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

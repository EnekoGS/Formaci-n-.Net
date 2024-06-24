import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './inicio/home/home.component';
import { NotFoundComponent } from './inicio/not-found/not-found.component';
import { ConsultaRecetasComponent } from './recetas/consulta-recetas/consulta-recetas.component';
import { FooterComponent } from './shared/footer/footer.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'recetas', component: ConsultaRecetasComponent },
  { path: '**', component: NotFoundComponent },
  { path: 'footer', component: FooterComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaisesComponent } from './paises.component';
import { ConsultaPaisesComponent } from './consulta-paises/consulta-paises.component';

const appRoutes: Routes = [
    {
        path: '',
        component: PaisesComponent,
        children: [
            { path: '', redirectTo: '/paises/consulta-paises', pathMatch: 'full' },
            { path: 'consulta-paises', component: ConsultaPaisesComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(appRoutes)],
    exports: [RouterModule]
})
export class PaisesRoutingModule {}
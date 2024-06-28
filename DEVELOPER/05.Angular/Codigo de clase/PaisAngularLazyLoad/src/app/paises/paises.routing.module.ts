import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaisesComponent } from './paises.component';
import { ConsultaPaisesComponent } from './consulta-paises/consulta-paises.component';
import { TablaPaisesComponent } from './tabla-paises/tabla-paises.component';

const appRoutes: Routes = [
    {
        path: '',
        component: PaisesComponent,
        children: [
            { path: '', redirectTo: '/paises/consulta-paises', pathMatch: 'full' },
            { path: 'consulta-paises', component: ConsultaPaisesComponent },
            {
                path: 'tabla-paises',
                component: TablaPaisesComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(appRoutes)],
    exports: [RouterModule]
})
export class PaisesRoutingModule {}
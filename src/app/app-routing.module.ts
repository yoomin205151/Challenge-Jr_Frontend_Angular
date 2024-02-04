import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoberturasComponent } from './pages/coberturas/coberturas.component';
import { PolizascoberturasComponent } from './pages/polizascoberturas/polizascoberturas.component';


const routes: Routes = [
  { path: '', component: PolizascoberturasComponent },
  { path: 'coberturas', component: CoberturasComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

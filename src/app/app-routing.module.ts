import { AcercadeComponent } from './components/acercade/acercade.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ContactoComponent } from './components/contacto/contacto.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'contacto', component: ContactoComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'acercaDe', component: AcercadeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasAltaComponent } from './categorias/categorias-alta/categorias-alta.component';

import { HomeComponent } from './comun/home/home.component';
import { NotfoundComponent } from './comun/notfound/notfound.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"altaCategoria",component:CategoriasAltaComponent},
  {path:"**",component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

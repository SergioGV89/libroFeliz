import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasAltaComponent } from './categorias/categorias-alta/categorias-alta.component';
import { CategoriasConsultaComponent } from './categorias/categorias-consulta/categorias-consulta.component';
import { CategoriasDetalleComponent } from './categorias/categorias-detalle/categorias-detalle.component';

import { HomeComponent } from './comun/home/home.component';
import { NotfoundComponent } from './comun/notfound/notfound.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"categoria/alta",component:CategoriasAltaComponent},
  {path:"categoria/consulta",component:CategoriasConsultaComponent},
  {path:'categoria/detalle/:idcategoria',component:CategoriasDetalleComponent},
  {path:'categoria/detalle/:idcategoria/volver',component:CategoriasConsultaComponent},
  {path:"**",component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

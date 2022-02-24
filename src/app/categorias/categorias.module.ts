import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { CategoriasAltaComponent } from './categorias-alta/categorias-alta.component';
import { CategoriasDetalleComponent } from './categorias-detalle/categorias-detalle.component';
import { CategoriasConsultaComponent } from './categorias-consulta/categorias-consulta.component';


@NgModule({
  declarations: [
    CategoriasAltaComponent,
    CategoriasDetalleComponent,
    CategoriasConsultaComponent
  ],
  imports: [
    CommonModule,
    CategoriasRoutingModule
  ],
  exports:[CategoriasAltaComponent]
})
export class CategoriasModule { }

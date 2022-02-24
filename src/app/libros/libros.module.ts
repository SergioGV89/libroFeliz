import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibrosRoutingModule } from './libros-routing.module';
import { LibrosConsultaComponent } from './libros-consulta/libros-consulta.component';
import { LibrosAltaComponent } from './libros-alta/libros-alta.component';
import { LibrosDetalleComponent } from './libros-detalle/libros-detalle.component';


@NgModule({
  declarations: [
    LibrosConsultaComponent,
    LibrosAltaComponent,
    LibrosDetalleComponent
  ],
  imports: [
    CommonModule,
    LibrosRoutingModule
  ]
})
export class LibrosModule { }

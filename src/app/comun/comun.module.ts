import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComunRoutingModule } from './comun-routing.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';


@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    NotfoundComponent
  ],
  imports: [
    CommonModule,
    ComunRoutingModule
  ],
  exports:[
    NavbarComponent,
    HomeComponent,
    NotfoundComponent
  ]

})
export class ComunModule { }

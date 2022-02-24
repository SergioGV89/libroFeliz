import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CategoriasModule } from './categorias/categorias.module';
import { ComunModule } from './comun/comun.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComunModule,
    CategoriasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

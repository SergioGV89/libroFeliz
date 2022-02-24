import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Categoria } from 'src/app/models/categoria';
import { CategoriaService } from 'src/app/service/categoria.service';

@Component({
  selector: 'app-categorias-detalle',
  templateUrl: './categorias-detalle.component.html',
  styleUrls: ['./categorias-detalle.component.css']
})
export class CategoriasDetalleComponent implements OnInit {
public categoria:Categoria
private id=0
  constructor(private ruta:ActivatedRoute,private servicioCategoria:CategoriaService)
  {
    this.categoria={
      idcategoria:0,
      nombre:null,
      descripcion:null
    }
    this.id=ruta.snapshot.params["idcategoria"]




  }

  ngOnInit(): void {
    this.getCategoria()
  }

  public getCategoria()
  {
    this.servicioCategoria.getCategoria(this.id).subscribe({
      next:((data)=>JSON.stringify( this.categoria=data)),
      error:((error)=>console.log(error)),
      complete:(()=>console.log("CATEGORIA"+this.id))
    })
  }

}

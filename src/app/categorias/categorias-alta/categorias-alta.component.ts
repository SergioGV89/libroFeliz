import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Categoria } from 'src/app/models/categoria';
import { CategoriaService } from 'src/app/service/categoria.service';


@Component({
  selector: 'app-categorias-alta',
  templateUrl: './categorias-alta.component.html',
  styleUrls: ['./categorias-alta.component.css']
})
export class CategoriasAltaComponent implements OnInit {

  public categoria:Categoria //inicio undefined
  constructor(private servicioCategoria:CategoriaService) {
    this.categoria={
      nombre:null,
      descripcion:null
    }
   }

  ngOnInit(): void {

  }

  /**
   * postCategoria
   */
  public postCategoria(formulario:NgForm)
  {
    console.log(this.categoria)
    if(formulario.valid)
    {
      this.servicioCategoria.postCategoria(this.categoria).subscribe({
        next:((resp)=>console.log(resp)),
        error:((error)=>console.log(error)),
        complete:(()=>alert("alta Confimada"))
      })
    }



  }
  




}

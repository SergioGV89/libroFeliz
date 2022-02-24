import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria';
import { CategoriaService } from 'src/app/service/categoria.service';

@Component({
  selector: 'app-categorias-consulta',
  templateUrl: './categorias-consulta.component.html',
  styleUrls: ['./categorias-consulta.component.css']
})
export class CategoriasConsultaComponent implements OnInit {

  categorias!:Categoria[]
  constructor(private servicioCategoria:CategoriaService) {


  }

  ngOnInit(): void {
    this.getCategorias()
  }


  /**
   * getCategoria
   */
  public getCategorias() {
    this.servicioCategoria.getCategorias().subscribe(
      {next:((data)=>this.categorias=data),
        error:((error)=>console.error(error)),
          complete:(()=>console.log("completado"))

      },

    )

  }

}

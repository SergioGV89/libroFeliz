import { Injectable } from '@angular/core';
import{HttpClient} from "@angular/common/http"
import { Categoria } from '../models/categoria';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private static api ="https://alcyon-it.com/WEBSERVICES/librofeliz/"

  constructor(private Ajax:HttpClient)
  {   }
  /**
   * Post
   */
  public postCategoria(categoria:Categoria):Observable<any>
  {
    return this.Ajax.post<Categoria>(CategoriaService.api+"altacategoria.php",JSON.stringify(categoria))//objeto


  }
  /**
   * getCategoria
   */
  public getCategorias():Observable<Categoria[]> {
    return this.Ajax.get<Categoria[]>(CategoriaService.api+"consultacategorias.php")

  }

  public getCategoria(id:number):Observable<Categoria> {
    return this.Ajax.get<Categoria>(CategoriaService.api+"consultacategorias.php?idcategoria="+id)

  }
}

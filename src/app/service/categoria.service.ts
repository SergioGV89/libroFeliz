import { Injectable } from '@angular/core';
import{HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private static api ="https://alcyon-it.com/WEBSERVICES/librofeliz/altacategoria.php"

  constructor(private Ajax:HttpClient) {
    
   }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from 'src/models/post.models';
import { Observable } from 'rxjs';
import { Items } from 'src/models/item.models';
import { perguntas } from 'src/models/perguntas.models';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  //URL's
  URL = "http://localhost:3000/posts";
  URLP = "http://localhost:3001/perguntas";

  constructor( private http: HttpClient ) 
  {
   
  }

  buscarPorCodigo(codigo : number) : Observable<Post>{
    return this.http.get<Post>(this.URL + "/" + codigo);
  }


  incluir(post: Post)  : Observable<any>
  {
    return this.http.post<Post>(this.URL, post)
  }

  editar(codigo: number, nome: Post)  : Observable<any>
  {
    return this.http.put<Post>(this.URL + "/" + codigo, nome);
  }

  excluir(codigo: number)  : Observable<any>
  {
    return this.http.delete<any>(this.URL + "/" + codigo);
  }

  getPost() : Observable<Post[]>{
    return this.http.get<Post[]>(this.URL);
  }
  
  //Listagem de perguntas
  getPerguntas() : Observable <perguntas[]>
  {
    return this.http.get<perguntas[]>(this.URLP);
  }
}

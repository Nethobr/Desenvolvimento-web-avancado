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
  URL = "http://localhost:3001/post";
  URLP = "http://localhost:3001/perguntas";

  constructor( private http: HttpClient ) 
  {
   
  }

  buscarPorId(id : number) : Observable<Post>{
    return this.http.get<Post>(this.URL + "/" + id);
  }


  incluir(post: Post)  : Observable<any>
  {
    return this.http.post<Post>(this.URL, post)
  }

  editar(id: number, nome: Post)  : Observable<any>
  {
    return this.http.put<Post>(this.URL + "/" + id, nome);
  }

  excluir(id: number)  : Observable<any>
  {
    return this.http.delete<any>(this.URL + "/" + id);
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

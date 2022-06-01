import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//Tem que importar o models da tabela na pastar "models"
import { Membros } from 'src/models/membros.models';

//Aqui é onde fazemos a conexão com a tabela do banco de dados.

@Injectable({
  providedIn: 'root'
})
export class MembrosListService {

  //Passamos a url da tabela para uma varável
  URL = "http://localhost:3000/membros";

  //Passamos o http para o constructor para ele carregar de início
  constructor(private http: HttpClient) 
  { 

  }

  buscarPorCodigo(codigo : number) : Observable<Membros>{
    return this.http.get<Membros>(this.URL + "/" + codigo);
  }

  //Função para retornar a tabela
  getMembros() : Observable<Membros[]>
  {
    return this.http.get<Membros[]>(this.URL);
  }
}

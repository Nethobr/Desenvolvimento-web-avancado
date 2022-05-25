import { Component, OnInit } from '@angular/core';
import { CadastroService } from 'src/app/cadastro.service';

import { Post } from 'src/models/post.models';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  //array que vai resceber todos o valores do banco
  listPost : Post [] = [];
  //Nome das colunas
  colunas: string[] = ['id', 'nome', 'descricao', 'acoes'];

  constructor(private cadastro: CadastroService) { }

  ngOnInit(): void 
  {
    //chama a função get
    this.cadastro.getPost().subscribe( post => {this.listPost = post});
  }
}
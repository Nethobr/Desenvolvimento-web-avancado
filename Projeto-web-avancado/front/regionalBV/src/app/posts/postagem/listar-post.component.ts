import { Component, OnInit } from '@angular/core';
import { Post } from 'src/models/post.models';
import { CadastroService } from 'src/app/cadastro.service';

@Component({
  selector: 'app-listar-post',
  templateUrl: './listar-post.component.html',
  styleUrls: ['./listar-post.component.css']
})
export class ListarPostComponent implements OnInit {

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
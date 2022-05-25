import { Component, OnInit } from '@angular/core';
import { Post } from 'src/models/post.models';
import { Router } from '@angular/router';

import { CadastroService } from 'src/app/cadastro.service';

@Component({
  selector: 'app-incluir',
  templateUrl: './incluir.component.html',
  styleUrls: ['./incluir.component.css']
})
export class IncluirComponent implements OnInit {

  post : Post = new Post ();

  //construtor
  constructor(private router: Router,
              private cadastro: CadastroService) { }

  ngOnInit(): void {
  }

  //função para salvar post
  salvarPost ()
  {
    this.cadastro.incluir(this.post).subscribe
    (
      //Arrow function
      () => 
        {
          this.router.navigate (['cadastro/posts']);
        }       
    );
  } //fim salvarPost
} //fim class

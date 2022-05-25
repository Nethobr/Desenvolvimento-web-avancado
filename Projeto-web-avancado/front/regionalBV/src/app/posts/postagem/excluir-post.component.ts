import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CadastroService } from 'src/app/cadastro.service';
import { Post } from 'src/models/post.models';

@Component({
  selector: 'app-excluir-post',
  templateUrl: './excluir-post.component.html',
  styleUrls: ['./excluir-post.component.css']
})
export class ExcluirPostComponent implements OnInit {
  post : Post = new Post ();

  //construtor
  constructor(private router: Router,
              private route: ActivatedRoute,
              private cadastro: CadastroService) { }

  ngOnInit(): void {
    const str = this.route.snapshot.paramMap.get('codigo');
    this.cadastro.buscarPorCodigo(Number(str)).subscribe((post) => {
      this.post = post;
    });
  }

  //função para excluir post
  exculirPost ()
  {
    this.cadastro.excluir(this.post.codigo).subscribe
    (
      //Arrow function
      () => 
        {
          this.router.navigate (['posts']);
        }       
    );
  } //fim excluirPost

}
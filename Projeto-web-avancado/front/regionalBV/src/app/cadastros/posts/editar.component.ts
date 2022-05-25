import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CadastroService } from 'src/app/cadastro.service';
import { Post } from 'src/models/post.models';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  post : Post = new Post ();

  //construtor
  constructor(private router: Router,
              private route: ActivatedRoute,
              private cadastro: CadastroService) { }

  ngOnInit(): void {
    const str = this.route.snapshot.paramMap.get('id');
    this.cadastro.buscarPorId(Number(str)).subscribe((post) => {
      this.post = post;
    });
  }

  //função para salvar post
  editarPost ()
  {
    this.cadastro.editar(this.post.id, this.post).subscribe
    (
      //Arrow function
      () => 
        {
          this.router.navigate (['cadastro/posts']);
        }       
    );
  } //fim editarPost
}

import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Extra import
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';

// Componentes
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SobreComponent } from './sobre/sobre.component';
import { AdminComponent } from './admin/admin.component';
import { MapasComponent } from './mapas/mapas.component';
import { PesquisasComponent } from './pesquisas/pesquisas.component';
import { PostsComponent } from './posts/posts.component';
import { CadastrosComponent } from './cadastros/cadastros.component';
import { ListarComponent } from './cadastros/posts/listar.component';
import { EditarComponent } from './cadastros/posts/editar.component';
import { ExcluirComponent } from './cadastros/posts/excluir.component';
import { IncluirComponent } from './cadastros/posts/incluir.component';

import { ListarPostComponent } from './posts/postagem/listar-post.component';
import { IncluirPostComponent } from './posts/postagem/incluir-post.component';
import { EditarPostComponent } from './posts/postagem/editar-post.component';
import { ExcluirPostComponent } from './posts/postagem/excluir-post.component';

const routes: Routes = 
  [
    {path: "", component: HomeComponent},
    {path: "sobre", component: SobreComponent},
    {path: "admin", component: AdminComponent},
    {path: "login", component: LoginComponent},
    {path: "mapas", component: MapasComponent},
    {path: "pesquisas", component: PesquisasComponent},
    {path: "posts", component: PostsComponent,
      children: 
      [
        {path: "", component: ListarPostComponent},
        {path: "adicionar-post", component: IncluirPostComponent},
        {path: "editar-post/:id", component: EditarPostComponent},
        {path: "excluir-post/:id", component: ExcluirPostComponent}
      ]
    },
    {path: "cadastro", component: CadastrosComponent,
      children: 
        [
          {path: "posts", component: ListarComponent},
          {path: "posts/incluir", component: IncluirComponent},
          {path: "posts/editar/:id", component: EditarComponent},
          {path: "posts/excluir/:id", component: ExcluirComponent}
        ]
    }
  ];

@NgModule({
  imports: [ RouterModule.forRoot(routes), MatIconModule, MatTableModule],
  exports: [RouterModule,  MatIconModule, MatTableModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

//Imports para trabalhar com formulário
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

//Outros imports
import {MatMenuModule} from '@angular/material/menu';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SobreComponent } from './sobre/sobre.component';
import { AdminComponent } from './admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AsideComponent } from './aside/aside.component';
import { MapasComponent } from './mapas/mapas.component';
import { PesquisasComponent } from './pesquisas/pesquisas.component';
import { PostsComponent } from './posts/posts.component';
import { CadastrosComponent } from './cadastros/cadastros.component';
import { ListarComponent } from './cadastros/posts/listar.component';
import { EditarComponent } from './cadastros/posts/editar.component';
import { IncluirComponent } from './cadastros/posts/incluir.component';
import { ExcluirComponent } from './cadastros/posts/excluir.component';
import { IncluirPostComponent } from './posts/postagem/incluir-post.component';
import { EditarPostComponent } from './posts/postagem/editar-post.component';
import { ExcluirPostComponent } from './posts/postagem/excluir-post.component';
import { ListarPostComponent } from './posts/postagem/listar-post.component';

@NgModule({

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatMenuModule,
    MatDatepickerModule
  ],

  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    LoginComponent,
    SobreComponent,
    AdminComponent,
    AsideComponent,
    MapasComponent,
    PesquisasComponent,
    PostsComponent,
    CadastrosComponent,
    ListarComponent,
    EditarComponent,
    IncluirComponent,
    ExcluirComponent,
    IncluirPostComponent,
    EditarPostComponent,
    ExcluirPostComponent,
    ListarPostComponent
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

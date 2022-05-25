import { Component, OnInit } from '@angular/core';
import { perguntas } from 'src/models/perguntas.models';
import { CadastroService } from '../cadastro.service';

// Table angular
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-pesquisas',
  templateUrl: './pesquisas.component.html',
  styleUrls: ['./pesquisas.component.css']
})
export class PesquisasComponent implements OnInit {

  constructor(private mem: CadastroService) {  }

  ngOnInit(): void 
  {
    this.mem.getPerguntas().subscribe( mem => {this.listPerguntas = mem});;
  }

  listPerguntas : perguntas [] = [];

  // Table angular
  displayedColumns: string[] = ['position', 'optionOne', 'optionTwo', 'symbol', 'group'];
  
  //Table angular
}

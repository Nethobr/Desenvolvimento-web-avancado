import { Component, OnInit } from '@angular/core';
import { Membros } from 'src/models/membros.models';
import { MembrosListService } from '../membros-list.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  listMember : Membros [] = [];

  constructor(private mem: MembrosListService) { }

  ngOnInit(): void 
  {
    this.mem.getMembros().subscribe( mem => {this.listMember = mem});
  }

}

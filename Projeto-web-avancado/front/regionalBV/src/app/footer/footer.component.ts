import { Component, OnInit } from '@angular/core';
import { data } from './data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit 
{
  dateExport = data;

  constructor() 
  {

  }

  ngOnInit(): void {
  }

}

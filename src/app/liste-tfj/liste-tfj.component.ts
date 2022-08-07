import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'autoprefixer';
import { ListTFJ } from '../Models/list-tfj';
import { ListeTFJService } from '../services/liste-tfj.service';

@Component({
  selector: 'app-liste-tfj',
  templateUrl: './liste-tfj.component.html',
  styleUrls: ['./liste-tfj.component.css']
})
export class ListeTFJComponent implements OnInit {
  displayedColumns: string[] = ['DCO','nmvt','t_HI','t_TOT'];
  
  ListTFJList : ListTFJ[] 


  
  constructor(private serviceLTFJ : ListeTFJService , private router : Router) { }

  ngOnInit(): void {
    this.getLTFJ();
  }
  getLTFJ() {
return this.serviceLTFJ.getListeTFJ().subscribe(data => this.ListTFJList = data);
  }

}







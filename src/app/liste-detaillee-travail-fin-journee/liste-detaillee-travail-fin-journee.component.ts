import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ldtfj } from '../Models/ldtfj';
import { ListeDetailleeTravailFinJourneeModelService } from '../services/liste-detaillee-travail-fin-journee-model.service';

@Component({
  selector: 'app-liste-detaillee-travail-fin-journee',
  templateUrl: './liste-detaillee-travail-fin-journee.component.html',
  styleUrls: ['./liste-detaillee-travail-fin-journee.component.css']
})
export class ListeDetailleeTravailFinJourneeComponent implements OnInit {
  displayedColumns: string[] = ['prog', 'DATD', 'DATF', 'duree'];


  LdtfjList : Ldtfj[];
 

  constructor(private  servicesL : ListeDetailleeTravailFinJourneeModelService , private router : Router ) { }

  ngOnInit(): void {
    this.getLDFJ();
  }
   getLDFJ(){
   return this.servicesL.getListeDetailleServicesTFJ().subscribe(data=>
      this.LdtfjList = data)
  }

}

import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { FicheIntervention } from '../Models/fiche-intervention';
import { FicheInterventionService } from '../services/fiche-intervention.service';

@Component({
  selector: 'app-add-fiche-intervention',
  templateUrl: './add-fiche-intervention.component.html',
  styleUrls: ['./add-fiche-intervention.component.css']
})
export class AddFicheInterventionComponent implements OnInit {

  ficheIntervention : FicheIntervention = new FicheIntervention ;
  constructor(private FicheInterventionService : FicheInterventionService , private router : Router  ) { }

  ngOnInit(): void {
  }
saveFicheIntervention (){
  return this.FicheInterventionService.createFicheIntervention(this.ficheIntervention).
  subscribe({
    next:()=>{this.gotoFicheInternetionList},
    complete : ()=> {this.gotoFicheInternetionList();},
    error : ()=> {console.log(console.error()
    )}
  })
  
  /*(data =>{
    console.log(data);
    this.gotoFicheInternetionList();
  }, error => console.log(error)
  )*/
}
gotoFicheInternetionList(){
this.router.navigate(['/ListOfFichesInterventions'])
}



OnSubmit(){
   
  console.log(this.ficheIntervention)
  this.saveFicheIntervention();
 }

}

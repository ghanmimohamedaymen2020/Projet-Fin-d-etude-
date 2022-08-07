import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FicheIntervention } from '../Models/fiche-intervention';
import { FicheInterventionService } from '../services/fiche-intervention.service';

@Component({
  selector: 'app-list-of-fiche-intervention',
  templateUrl: './list-of-fiche-intervention.component.html',
  styleUrls: ['./list-of-fiche-intervention.component.css']
})
export class ListOfFicheInterventionComponent implements OnInit {
  ficheInterventions : FicheIntervention[] ; 

  // items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  // expandedIndex = 0;


  constructor(private ficheInterventionService : FicheInterventionService ,private route : Router) { }

  ngOnInit(): void {
    this.getFicheIntervention() ;

  }
  private getFicheIntervention(){
   this.ficheInterventionService.getListFicheIntervention().subscribe(data=>
     this.ficheInterventions = data 
   )}

   updateFicheIntervention(id : number){
    this.route.navigate(['update-user/',id])
  }

}

// @Component({
//   selector: 'app-list-of-fiche-intervention',
//   templateUrl: './list-of-fiche-intervention.component.html',
//   styleUrls: ['./list-of-fiche-intervention.component.css']
// })
// export class ListOfFicheInterventionComponent implements OnInit {
//   //ficheInterventions : FicheIntervention[] ; 




//   constructor(private ficheInterventionService : FicheInterventionService) { }

//   ngOnInit(): void {
    
//   // }
//   // private getFicheIntervention(){
//   //   this.ficheInterventionService.getListFicheIntervention().subscribe(data=>
//   //     this.ficheInterventions = data 
//   //   )}

// /**
//  * 
  
//   private getTickets(){
//     this.serviceTicket.getListTicket().subscribe(data=>
//       this.tickets = data 
//     )
      

//   }
//   private getTicket(idSelectedTicket ){
//     this.serviceTicket.getTicketById(idSelectedTicket).subscribe(data=>
//       this.ticket =data)
//       console.log(idSelectedTicket)
//   }

//   OnSubmit(){
//     this.getTickets();
//   }
//  *  **/



//   }}



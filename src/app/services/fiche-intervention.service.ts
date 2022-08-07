import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FicheIntervention } from '../Models/fiche-intervention';

@Injectable({
  providedIn: 'root'
})
export class FicheInterventionService {

  constructor(private http : HttpClient) { }

public getListFicheIntervention():Observable<FicheIntervention[]> {
console.log(this.http.get<FicheIntervention[]>("http://localhost:8082/ListOfFichesInterventions"));
  return this.http.get<FicheIntervention[]>("http://localhost:8082/ListOfFichesInterventions");
  


}
updateFicheIntervention(id : number):Observable<FicheIntervention[]>{
  return this.http.put<FicheIntervention[]>("http://localhost:8080",id)
}

createFicheIntervention(FicheIntervention : FicheIntervention): Observable<Object>{
  return this.http.post("http://localhost:8082/addNewFicheIntervention",FicheIntervention)

}
getFicheInterventionById(id:number): Observable<FicheIntervention>{
  console.log(id)
  return this.http.get<FicheIntervention>(`http://localhost:8080/${id}`)
}



saveFicheInterventionToPDF(){
  
}}
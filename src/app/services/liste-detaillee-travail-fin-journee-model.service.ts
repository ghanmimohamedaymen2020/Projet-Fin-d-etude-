import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ldtfj } from '../Models/ldtfj';

@Injectable({
  providedIn: 'root'
})
export class ListeDetailleeTravailFinJourneeModelService {

  constructor(private http : HttpClient) { }

 



  public getListeDetailleServicesTFJ():Observable<Ldtfj[]> {
    console.log(this.http.get<Ldtfj[]>("http://localhost:8082/DetailleTFJ"));
      return this.http.get<Ldtfj[]>("http://localhost:8082/DetailleTFJ");
          
    }

}

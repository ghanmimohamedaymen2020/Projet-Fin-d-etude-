import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListTFJ } from '../Models/list-tfj';

@Injectable({
  providedIn: 'root'
})
export class ListeTFJService {

  constructor(private http : HttpClient) { }

 



  public getListeTFJ():Observable<ListTFJ[]> {
    console.log(this.http.get<ListTFJ[]>("http://localhost:8082/LTFJ"));
      return this.http.get<ListTFJ[]>("http://localhost:8082/LTFJ");
          
    }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Adherent {

  id: number;

  firstName: string;

  lastName: string;
  
}



@Injectable({
  providedIn: 'root'
})
export class AdherentQueryService {
  
constructor(private httpClient:HttpClient) { }

public getAdherents(): Observable<Adherent[]> {

 return this.httpClient.get<Adherent[]>('http://localhost:8070/api/private/adherent/list')
}

}



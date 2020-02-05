import { Injectable } from '@angular/core';
import { Time } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Session {

  id: number;
  date: Date;
  places: Number;
  where: string;
  begin: Time;
  end: Time;

}

@Injectable({
  providedIn: 'root'
})
export class SessionQueryService {

  constructor(private httpClient: HttpClient) {}
    public getSessions(): Observable<Session[]> {

      return this.httpClient.get<Session[]>('http://localhost:8070/api/private/session/' )
  }
}

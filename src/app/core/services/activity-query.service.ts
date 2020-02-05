import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Activity {
  id: number;
	
	title: string;
	
  description: string;
  
  price: number;
}



@Injectable({
  providedIn: 'root'
})
export class ActivityQueryService {
  
constructor(private httpClient:HttpClient) { }

public getActivities(): Observable<Activity[]> {

 return this.httpClient.get<Activity[]>('http://localhost:8070/api/private/activity/list')
}

}
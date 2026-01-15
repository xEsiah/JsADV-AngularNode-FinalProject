import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Destination } from './destination.model';

@Injectable({
  providedIn: 'root',
})
export class DestinationService {
  private apiUrl = 'http://localhost:3000/api/destination';

  constructor(private http: HttpClient) {}

  getAllDestinations(): Observable<Destination[]> {
    return this.http.get<Destination[]>(this.apiUrl);
  }

  addDestination(destination: Destination): Observable<any> {
    return this.http.post(this.apiUrl, destination);
  }
}

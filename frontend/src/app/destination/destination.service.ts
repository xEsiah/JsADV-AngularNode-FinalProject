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
  getAll(): Observable<Destination[]> {
    return this.http.get<Destination[]>(this.apiUrl);
  }
}

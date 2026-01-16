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
    return new Observable((observer) => {
      this.http.get<Destination[]>(this.apiUrl).subscribe({
        next: (data) => {
          observer.next(data);
          observer.complete();
        },
        error: (err) => {
          observer.error(err);
        },
      });
    });
  }
}

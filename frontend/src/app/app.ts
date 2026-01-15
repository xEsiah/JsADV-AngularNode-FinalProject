import { Component, OnInit } from '@angular/core';
import { DestinationService } from './destination/destination.service';
import { Destination } from './destination/destination.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  standalone: false,
})
export class AppComponent implements OnInit {
  destinations: Destination[] = [];
  newDestination: Destination = new Destination('', '', '', 0, false);

  constructor(private destinationService: DestinationService) {}

  ngOnInit(): void {
    this.loadDestinations();
  }

  loadDestinations(): void {
    this.destinationService.getAllDestinations().subscribe({
      next: (data) => (this.destinations = data),
      error: (err: any) => console.error('Erreur :', err),
    });
  }
}

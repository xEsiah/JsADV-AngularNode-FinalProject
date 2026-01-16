import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestinationService } from './destination.service';
import { Observable } from 'rxjs';
import { Destination } from './destination.model';
import { SpinnerComponent } from '../shared/spinner/spinner';

@Component({
  selector: 'app-destinations',
  standalone: true,
  imports: [CommonModule, SpinnerComponent],
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss'],
})
export class DestinationComponent {
  destinations$: Observable<Destination[]>;

  constructor(private destinationService: DestinationService) {
    this.destinations$ = this.destinationService.getAll();
  }
}

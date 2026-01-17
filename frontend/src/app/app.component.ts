import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet, Router } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { AuthComponent } from './auth/auth.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, AuthComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  standalone: true,
})
export class AppComponent {
  constructor(
    public router: Router,
    public authService: AuthService,
  ) {}

  get username(): string {
    return this.authService.getUsername();
  }
}

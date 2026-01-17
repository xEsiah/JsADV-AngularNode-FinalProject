import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
})
export class ProfilComponent implements OnInit {
  constructor(
    public authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit() {
    // Sécurité : si on arrive ici sans être connecté, retour à l'accueil
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/']);
    }
  }
}

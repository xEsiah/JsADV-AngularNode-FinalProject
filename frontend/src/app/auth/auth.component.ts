import { Component } from '@angular/core';
import { AuthService, RegisterData, LoginData } from './auth.service'; // Ajuste le chemin
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  loginData: LoginData = { email: '', password: '' };
  registerData: RegisterData = { email: '', username: '', password: '' };
  isLoginMode: boolean = true;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onLogin() {
    this.authService.login(this.loginData).subscribe({
      next: () => this.router.navigate(['/destinations']),
      error: (err) => alert('Erreur : ' + err.error.error),
    });
  }

  onRegister() {
    this.authService.register(this.registerData).subscribe({
      next: () => this.router.navigate(['/destinations']),
      error: (err) => console.error(err),
    });
  }
}

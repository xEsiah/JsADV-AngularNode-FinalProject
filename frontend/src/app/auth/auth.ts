import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

// Interface pour la réponse du serveur
export interface AuthResponse {
  userId: string;
  token: string;
  username: string;
  pfpUrl?: string;
  friends: string[];
}

export interface LoginData {
  email: string;
  password?: string;
}

export interface RegisterData {
  email: string;
  password?: string;
  username: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/auth';

  constructor(private http: HttpClient) {}

  register(user: RegisterData): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  login(credentials: LoginData): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>(`${this.apiUrl}/login`, credentials)
      .pipe(
        tap((res) => {
          localStorage.setItem('token', res.token);
          localStorage.setItem('userId', res.userId);
          if (res.username) localStorage.setItem('username', res.username);
        }),
      );
  }

  getToken(): string {
    return localStorage.getItem('token') || '';
  }

  getUsername(): string {
    return localStorage.getItem('username') || '';
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  logout(): void {
    localStorage.clear();
    window.location.reload();
  }
}

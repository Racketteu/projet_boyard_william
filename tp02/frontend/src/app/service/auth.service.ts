import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private urlRegister = 'http://localhost:1664/login/register';
  private urlLogin = 'http://localhost:1664/login/signup'; // Endpoint de connexion

  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor(private http: HttpClient) {}

  register(user: { username: string; email: string; password: string }): Observable<any> {
    return this.http.post<any>(this.urlRegister, user).pipe(
      tap(response => {
        console.log('Register response:', response);
      })
    );
  }

  login(credentials: { username : string ; password: string }): Observable<any> {
    return this.http.post<any>(this.urlLogin, credentials).pipe(
      tap(response => {
        const token = response.token; 
        this.isLoggedInSubject.next(true); 
        if (token) {
          localStorage.setItem('token', token);
        }
        console.log('Login response:', response);
      }),
      map(response => response.token)
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.isLoggedInSubject.next(false);
  }

  // Méthode pour vérifier si l'utilisateur est connecté
  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !!token; // Retourne vrai si le token existe, faux sinon
  }
}
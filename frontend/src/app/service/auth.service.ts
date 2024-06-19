import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private urlRegister = '/api/login/register';
  private urlLogin = '/api/login/signup'; 
  private urlGetUser = '/api/login/get-user';

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

  getUser(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get<any>(this.urlGetUser, {
      headers: { Authorization: `Bearer ${token}` }
    }).pipe(
      tap(response => {
        console.log('Get User response:', response);
      })
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
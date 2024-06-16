import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrlLogin = 'https://localhost:7023/api/Login/login';
  private apiUrlLogout = 'https://localhost:7023/api/Login/logout';
  private apiUrlRegister = 'https://localhost:7023/api/Login/register';
  private ApiUrlUser = 'https://localhost:7023/api/Users/'
  

  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  private userId: string | null = null;

  constructor(private http: HttpClient) {}

  login(userName: string, password: string, rememberMe: boolean): Observable<any> {
    const loginData = {
      userName: userName,
      password: password,
      rememberMe: rememberMe
    };
    return this.http.post<any>(this.apiUrlLogin, loginData)
    .pipe(
      tap(response => {
        if (response) {
          this.userId = response.userId;
          this.isLoggedInSubject.next(true);
        }
      })
    );
  }

  register(registerData: {
    email: string;
    password: string;
    confirmPassword: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    userName: string;
    normalizedEmail: string;
    normalizedUserName: string;
  }): Observable<any> {
    return this.http.post<any>(this.apiUrlRegister, registerData)
      .pipe(
        tap(response => {
          if (response && response.userId) {
            this.userId = response.userId;
            this.isLoggedInSubject.next(true);
          }
        })
      );
  }

  getUserId(): string | null {
    return this.userId;
  }

  getUserInfo(): Observable<any> {
    const url = `https://localhost:7023/api/Users/${this.userId}`;
    return this.http.get<any>(url);
  }

  logout() {
    this.userId = null;
    this.isLoggedInSubject.next(false);
    return this.http.post(this.apiUrlLogout, null);
  }
}
